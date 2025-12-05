const PERPLEXITY_API_URL = 'https://api.perplexity.ai/chat/completions';

interface PerplexityResponse {
  choices: Array<{
    message: {
      content: string;
    };
  }>;
}

export async function generateBlogPost(topic: string, category: string): Promise<{
  title: string;
  excerpt: string;
  content: string;
  readTime: string;
}> {
  const apiKey = process.env.PERPLEXITY_API_KEY;
  if (!apiKey) {
    throw new Error('PERPLEXITY_API_KEY is not configured');
  }

  const prompt = `Write a professional blog post for InsureLimos, a commercial transportation insurance agency. 
  
Topic: ${topic}
Category: ${category}

Please provide the response in the following JSON format (and ONLY the JSON, no other text):
{
  "title": "A compelling, SEO-friendly title",
  "excerpt": "A 2-3 sentence summary of the article (150 characters max)",
  "content": "Full HTML content with <h2>, <h3>, <p>, <ul>, <li> tags. Make it informative, professional, and about 800-1200 words. Include practical advice for transportation business owners.",
  "readTime": "X min read"
}

Focus on providing valuable, accurate information about commercial transportation insurance, regulations, and best practices. The content should be helpful for limousine operators, taxi companies, TNC/rideshare drivers, NEMT providers, and bus operators.`;

  const response = await fetch(PERPLEXITY_API_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'sonar',
      messages: [
        {
          role: 'system',
          content: 'You are a professional content writer specializing in commercial transportation insurance. You write informative, accurate, and engaging blog posts. Always respond with valid JSON only.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      temperature: 0.7,
      max_tokens: 4000,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('Perplexity API error:', errorText);
    throw new Error(`Perplexity API error: ${response.status}`);
  }

  const data = await response.json() as PerplexityResponse;
  const content = data.choices[0]?.message?.content;
  
  if (!content) {
    throw new Error('No content received from Perplexity');
  }

  try {
    const jsonMatch = content.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error('Could not find JSON in response');
    }
    return JSON.parse(jsonMatch[0]);
  } catch (parseError) {
    console.error('Failed to parse Perplexity response:', content);
    throw new Error('Failed to parse AI response');
  }
}

export async function generateNewsRelease(topic: string, category: string): Promise<{
  title: string;
  summary: string;
  content: string;
}> {
  const apiKey = process.env.PERPLEXITY_API_KEY;
  if (!apiKey) {
    throw new Error('PERPLEXITY_API_KEY is not configured');
  }

  const prompt = `Write a professional news release/press release for InsureLimos, a commercial transportation insurance agency.

Topic: ${topic}
Category: ${category}

Please provide the response in the following JSON format (and ONLY the JSON, no other text):
{
  "title": "A professional news headline",
  "summary": "A 2-3 sentence summary of the news (150 characters max)",
  "content": "Full HTML news release content with <h2>, <h3>, <p> tags. Include a dateline, lead paragraph, body paragraphs with quotes, and a boilerplate 'About InsureLimos' section at the end. Make it 400-600 words."
}

The news release should be written in standard press release format and cover topics relevant to the transportation insurance industry, new services, partnerships, or industry developments.`;

  const response = await fetch(PERPLEXITY_API_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'sonar',
      messages: [
        {
          role: 'system',
          content: 'You are a professional PR writer specializing in the insurance industry. You write clear, newsworthy press releases. Always respond with valid JSON only.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      temperature: 0.7,
      max_tokens: 3000,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('Perplexity API error:', errorText);
    throw new Error(`Perplexity API error: ${response.status}`);
  }

  const data = await response.json() as PerplexityResponse;
  const content = data.choices[0]?.message?.content;
  
  if (!content) {
    throw new Error('No content received from Perplexity');
  }

  try {
    const jsonMatch = content.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error('Could not find JSON in response');
    }
    return JSON.parse(jsonMatch[0]);
  } catch (parseError) {
    console.error('Failed to parse Perplexity response:', content);
    throw new Error('Failed to parse AI response');
  }
}

export async function improveContent(content: string, contentType: 'blog' | 'news'): Promise<string> {
  const apiKey = process.env.PERPLEXITY_API_KEY;
  if (!apiKey) {
    throw new Error('PERPLEXITY_API_KEY is not configured');
  }

  const prompt = `Improve and enhance the following ${contentType === 'blog' ? 'blog post' : 'news release'} content for InsureLimos, a commercial transportation insurance agency.

Current content:
${content}

Please improve the content by:
1. Making it more engaging and professional
2. Improving clarity and readability
3. Adding relevant details about transportation insurance
4. Ensuring proper formatting with HTML tags

Return ONLY the improved HTML content, no explanations or JSON wrapper.`;

  const response = await fetch(PERPLEXITY_API_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'sonar',
      messages: [
        {
          role: 'system',
          content: 'You are a professional content editor. Improve the given content while maintaining its core message. Return only the improved HTML content.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      temperature: 0.5,
      max_tokens: 4000,
    }),
  });

  if (!response.ok) {
    throw new Error(`Perplexity API error: ${response.status}`);
  }

  const data = await response.json() as PerplexityResponse;
  return data.choices[0]?.message?.content || content;
}
