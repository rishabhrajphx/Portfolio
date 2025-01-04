import * as pdfjs from 'pdfjs-dist';
import mammoth from 'mammoth';

export const extractPdfText = async (file: File): Promise<string> => {
  const arrayBuffer = await file.arrayBuffer();
  const pdf = await pdfjs.getDocument(arrayBuffer).promise;
  let text = '';
  
  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();
    text += content.items.map((item: any) => item.str).join(' ');
  }
  
  return text;
};

export const extractDocxText = async (file: File): Promise<string> => {
  const arrayBuffer = await file.arrayBuffer();
  const result = await mammoth.extractRawText({ arrayBuffer });
  return result.value;
};

export const parseResumeText = (text: string) => {
  // Implement parsing logic here using regex or NLP libraries
  // This is a simplified example
  const extractedData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
  };

  // Extract email
  const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
  const emailMatch = text.match(emailRegex);
  if (emailMatch) {
    extractedData.email = emailMatch[0];
  }

  // Extract phone
  const phoneRegex = /(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}/;
  const phoneMatch = text.match(phoneRegex);
  if (phoneMatch) {
    extractedData.phone = phoneMatch[0];
  }

  return extractedData;
}; 