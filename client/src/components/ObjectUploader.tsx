import { useState, useCallback } from "react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Upload, X, FileText, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ObjectUploaderProps {
  maxNumberOfFiles?: number;
  maxFileSize?: number;
  allowedFileTypes?: string[];
  onGetUploadParameters: () => Promise<{
    method: "PUT";
    url: string;
  }>;
  onComplete?: (result: { successful: { uploadURL: string; name: string }[] }) => void;
  buttonClassName?: string;
  children: ReactNode;
}

interface SelectedFile {
  file: File;
  id: string;
}

export function ObjectUploader({
  maxNumberOfFiles = 5,
  maxFileSize = 10485760,
  allowedFileTypes = [".pdf", ".jpg", ".jpeg", ".png", ".doc", ".docx"],
  onGetUploadParameters,
  onComplete,
  buttonClassName,
  children,
}: ObjectUploaderProps) {
  const [showModal, setShowModal] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<SelectedFile[]>([]);
  const [uploading, setUploading] = useState(false);
  const { toast } = useToast();

  const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const validFiles: SelectedFile[] = [];
    
    for (const file of files) {
      if (selectedFiles.length + validFiles.length >= maxNumberOfFiles) {
        toast({
          title: "Too many files",
          description: `Maximum ${maxNumberOfFiles} files allowed.`,
          variant: "destructive",
        });
        break;
      }
      
      if (file.size > maxFileSize) {
        toast({
          title: "File too large",
          description: `${file.name} exceeds the ${Math.round(maxFileSize / 1024 / 1024)}MB limit.`,
          variant: "destructive",
        });
        continue;
      }
      
      const ext = "." + file.name.split(".").pop()?.toLowerCase();
      if (!allowedFileTypes.includes(ext)) {
        toast({
          title: "Invalid file type",
          description: `${file.name} is not an allowed file type.`,
          variant: "destructive",
        });
        continue;
      }
      
      validFiles.push({ file, id: crypto.randomUUID() });
    }
    
    setSelectedFiles(prev => [...prev, ...validFiles]);
    e.target.value = "";
  }, [selectedFiles.length, maxNumberOfFiles, maxFileSize, allowedFileTypes, toast]);

  const removeFile = (id: string) => {
    setSelectedFiles(prev => prev.filter(f => f.id !== id));
  };

  const handleUpload = async () => {
    if (selectedFiles.length === 0) return;
    
    setUploading(true);
    const successful: { uploadURL: string; name: string }[] = [];
    
    try {
      for (const { file } of selectedFiles) {
        const params = await onGetUploadParameters();
        
        const response = await fetch(params.url, {
          method: params.method,
          body: file,
          headers: {
            "Content-Type": file.type || "application/octet-stream",
          },
        });
        
        if (response.ok) {
          successful.push({ uploadURL: params.url, name: file.name });
        } else {
          throw new Error(`Failed to upload ${file.name}`);
        }
      }
      
      onComplete?.({ successful });
      setSelectedFiles([]);
      setShowModal(false);
    } catch (error: any) {
      toast({
        title: "Upload Failed",
        description: error.message || "An error occurred during upload.",
        variant: "destructive",
      });
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <Button 
        type="button" 
        variant="outline" 
        onClick={() => setShowModal(true)} 
        className={buttonClassName}
      >
        {children}
      </Button>

      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Upload Documents</DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4">
            <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
              <Upload className="h-10 w-10 mx-auto text-muted-foreground mb-4" />
              <p className="text-sm text-muted-foreground mb-2">
                Drag and drop files here, or click to browse
              </p>
              <p className="text-xs text-muted-foreground">
                PDF, JPG, PNG, DOC, DOCX, XLS, XLSX (Max {Math.round(maxFileSize / 1024 / 1024)}MB each)
              </p>
              <input
                type="file"
                multiple
                accept={allowedFileTypes.join(",")}
                onChange={handleFileChange}
                className="absolute inset-0 opacity-0 cursor-pointer"
                style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
              />
              <label className="mt-4 inline-block">
                <Button type="button" variant="secondary" size="sm" asChild>
                  <span>
                    <input
                      type="file"
                      multiple
                      accept={allowedFileTypes.join(",")}
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    Browse Files
                  </span>
                </Button>
              </label>
            </div>

            {selectedFiles.length > 0 && (
              <div className="space-y-2">
                <p className="text-sm font-medium">Selected Files ({selectedFiles.length}/{maxNumberOfFiles}):</p>
                <div className="max-h-40 overflow-y-auto space-y-2">
                  {selectedFiles.map(({ file, id }) => (
                    <div key={id} className="flex items-center justify-between bg-muted px-3 py-2 rounded-md text-sm">
                      <div className="flex items-center gap-2 min-w-0">
                        <FileText className="h-4 w-4 text-primary shrink-0" />
                        <span className="truncate">{file.name}</span>
                        <span className="text-muted-foreground shrink-0">
                          ({(file.size / 1024).toFixed(1)} KB)
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFile(id)}
                        className="text-muted-foreground hover:text-destructive transition-colors shrink-0 ml-2"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex justify-end gap-2">
              <Button type="button" variant="outline" onClick={() => setShowModal(false)}>
                Cancel
              </Button>
              <Button 
                type="button" 
                onClick={handleUpload} 
                disabled={selectedFiles.length === 0 || uploading}
              >
                {uploading ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Uploading...
                  </>
                ) : (
                  <>
                    <Upload className="h-4 w-4 mr-2" />
                    Upload {selectedFiles.length > 0 ? `(${selectedFiles.length})` : ""}
                  </>
                )}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
