import { useState } from 'react';
import { GoogleGenAI, Type } from '@google/genai';
import { Button } from './ui/Button';
import { Textarea } from './ui/Textarea';
import { Sparkles, Loader2 } from 'lucide-react';
import { useStore } from '../store';
import '../styles.css';

interface AIAssistantProps {
  planId: string;
  onClose: () => void;
}

export function AIAssistant({ planId, onClose }: AIAssistantProps) {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { updatePlan } = useStore();

  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    setIsLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `أريد خطة تسويق لـ: ${prompt}. قم بتوليد البيانات باللغة العربية.`,
        config: {
          systemInstruction: "أنت خبير تسويق استراتيجي. قم بإنشاء خطة تسويق بناءً على طلب المستخدم. يجب أن تكون المخرجات دقيقة، احترافية، ومناسبة للسوق العربي.",
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              problem: {
                type: Type.OBJECT,
                properties: {
                  description: { type: Type.STRING, description: "وصف المشكلة" },
                  impact: { type: Type.STRING, description: "تأثير المشكلة" }
                }
              },
              market: {
                type: Type.OBJECT,
                properties: {
                  size: { type: Type.STRING, description: "حجم السوق" },
                  trends: { type: Type.STRING, description: "التوجهات" },
                  competitors: { type: Type.STRING, description: "المنافسين" }
                }
              },
              audience: {
                type: Type.OBJECT,
                properties: {
                  personaName: { type: Type.STRING, description: "اسم الشخصية" },
                  age: { type: Type.STRING, description: "العمر" },
                  interests: { type: Type.STRING, description: "الاهتمامات" },
                  painPoints: { type: Type.STRING, description: "نقاط الألم" },
                  buyingBehavior: { type: Type.STRING, description: "السلوك الشرائي" }
                }
              },
              valueProposition: {
                type: Type.OBJECT,
                properties: {
                  statement: { type: Type.STRING, description: "البيان الأساسي" },
                  keyBenefits: { type: Type.ARRAY, items: { type: Type.STRING }, description: "الفوائد الرئيسية" }
                }
              },
              channels: {
                type: Type.OBJECT,
                properties: {
                  primary: { type: Type.ARRAY, items: { type: Type.STRING }, description: "القنوات الأساسية" },
                  secondary: { type: Type.ARRAY, items: { type: Type.STRING }, description: "القنوات الثانوية" }
                }
              },
              strategy: {
                type: Type.OBJECT,
                properties: {
                  awareness: { type: Type.STRING, description: "الوعي" },
                  consideration: { type: Type.STRING, description: "الاهتمام" },
                  conversion: { type: Type.STRING, description: "التحويل" },
                  retention: { type: Type.STRING, description: "الاحتفاظ" }
                }
              },
              budget: {
                type: Type.OBJECT,
                properties: {
                  total: { type: Type.STRING, description: "الميزانية الإجمالية" },
                  allocation: { type: Type.STRING, description: "توزيع الميزانية" }
                }
              },
              kpis: {
                type: Type.OBJECT,
                properties: {
                  primary: { type: Type.ARRAY, items: { type: Type.STRING }, description: "المؤشرات الأساسية" },
                  secondary: { type: Type.ARRAY, items: { type: Type.STRING }, description: "المؤشرات الثانوية" }
                }
              }
            }
          }
        }
      });

      if (response.text) {
        const generatedPlan = JSON.parse(response.text);
        updatePlan(planId, generatedPlan);
        onClose();
      }
    } catch (error) {
      console.error("Error generating plan:", error);
      alert("حدث خطأ أثناء توليد الخطة. يرجى المحاولة مرة أخرى.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="ai-assistant-container">
      <div className="ai-assistant-info">
        <h3 className="ai-assistant-title">
          <Sparkles className="w-5 h-5" />
          المساعد الذكي
        </h3>
        <p className="ai-assistant-description">
          صف مشروعك أو منتجك باختصار، وسيقوم الذكاء الاصطناعي ببناء خطة تسويقية كاملة لك. يمكنك التعديل عليها لاحقاً.
        </p>
      </div>

      <div className="ai-assistant-input-group">
        <label className="ai-assistant-label">عن ماذا تبحث؟</label>
        <Textarea
          placeholder="مثال: أريد خطة تسويق لمتجر عطور إلكتروني في السعودية يستهدف الشباب..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="ai-assistant-textarea"
        />
      </div>

      <div className="ai-assistant-actions">
        <Button variant="ghost" onClick={onClose} disabled={isLoading} className="ai-assistant-cancel-btn">
          إلغاء
        </Button>
        <Button onClick={handleGenerate} disabled={isLoading || !prompt.trim()} className="ai-assistant-generate-btn">
          {isLoading ? (
            <>
              <Loader2 className="ai-assistant-loading-icon" />
              جاري التوليد...
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4" />
              توليد الخطة
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
