import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useStore } from '../store';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Textarea } from '../components/ui/Textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/Card';
import { ArrowRight, ArrowLeft, Play, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Modal } from '../components/ui/Modal';
import { AIAssistant } from '../components/AIAssistant';
import '../styles.css';

const STEPS = [
  { id: 'problem', title: 'المشكلة', desc: 'ما هي المشكلة التي يحلها منتجك؟' },
  { id: 'market', title: 'السوق', desc: 'حجم السوق والمنافسين' },
  { id: 'audience', title: 'الجمهور', desc: 'من هو عميلك المثالي؟' },
  { id: 'valueProposition', title: 'القيمة المقترحة', desc: 'لماذا سيختارك العميل؟' },
  { id: 'channels', title: 'القنوات', desc: 'أين ستجد عملاءك؟' },
  { id: 'strategy', title: 'الاستراتيجية', desc: 'مسار العميل (Funnel)' },
  { id: 'budget', title: 'الميزانية', desc: 'توزيع الميزانية التسويقية' },
  { id: 'kpis', title: 'مؤشرات الأداء', desc: 'كيف ستقيس النجاح؟' },
];

export default function Builder() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { plans, updatePlan } = useStore();
  const [currentStep, setCurrentStep] = useState(0);
  const [isAIModalOpen, setIsAIModalOpen] = useState(false);

  const plan = plans.find(p => p.id === id);

  useEffect(() => {
    if (!plan) {
      navigate('/');
    }
  }, [plan, navigate]);

  if (!plan) return null;

  const handleNext = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      navigate(`/present/${id}`);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const updateField = (section: keyof typeof plan, field: string, value: any) => {
    updatePlan(id!, {
      [section]: {
        ...(plan[section] as any),
        [field]: value
      }
    });
  };

  const renderStepContent = () => {
    const step = STEPS[currentStep].id;

    switch (step) {
      case 'problem':
        return (
          <div className="builder-card-content">
            <div className="builder-form-group">
              <label className="builder-label">وصف المشكلة</label>
              <Textarea
                placeholder="صف المشكلة التي يعاني منها عملاؤك..."
                value={plan.problem.description}
                onChange={(e) => updateField('problem', 'description', e.target.value)}
                className="builder-textarea"
              />
            </div>
            <div className="builder-form-group">
              <label className="builder-label">تأثير المشكلة</label>
              <Input
                placeholder="كيف تؤثر هذه المشكلة على حياتهم أو أعمالهم؟"
                value={plan.problem.impact}
                onChange={(e) => updateField('problem', 'impact', e.target.value)}
                className="builder-input"
              />
            </div>
          </div>
        );
      case 'market':
        return (
          <div className="builder-card-content">
            <div className="builder-form-group">
              <label className="builder-label">حجم السوق</label>
              <Input
                placeholder="مثال: 5 مليار دولار سنوياً"
                value={plan.market.size}
                onChange={(e) => updateField('market', 'size', e.target.value)}
                className="builder-input"
              />
            </div>
            <div className="builder-form-group">
              <label className="builder-label">أبرز المنافسين</label>
              <Textarea
                placeholder="من هم أهم المنافسين وما هي نقاط ضعفهم؟"
                value={plan.market.competitors}
                onChange={(e) => updateField('market', 'competitors', e.target.value)}
                className="builder-textarea"
              />
            </div>
            <div className="builder-form-group">
              <label className="builder-label">التوجهات (Trends)</label>
              <Input
                placeholder="ما هي التوجهات الحالية في هذا السوق؟"
                value={plan.market.trends}
                onChange={(e) => updateField('market', 'trends', e.target.value)}
                className="builder-input"
              />
            </div>
          </div>
        );
      case 'audience':
        return (
          <div className="builder-card-content">
            <div className="builder-grid-2">
              <div className="builder-form-group">
                <label className="builder-label">اسم الشخصية (Persona)</label>
                <Input
                  placeholder="مثال: أحمد، مدير تسويق"
                  value={plan.audience.personaName}
                  onChange={(e) => updateField('audience', 'personaName', e.target.value)}
                  className="builder-input"
                />
              </div>
              <div className="builder-form-group">
                <label className="builder-label">العمر</label>
                <Input
                  placeholder="مثال: 25-35 سنة"
                  value={plan.audience.age}
                  onChange={(e) => updateField('audience', 'age', e.target.value)}
                  className="builder-input"
                />
              </div>
            </div>
            <div className="builder-form-group">
              <label className="builder-label">الاهتمامات</label>
              <Input
                placeholder="بماذا يهتمون؟"
                value={plan.audience.interests}
                onChange={(e) => updateField('audience', 'interests', e.target.value)}
                className="builder-input"
              />
            </div>
            <div className="builder-form-group">
              <label className="builder-label">نقاط الألم (Pain Points)</label>
              <Textarea
                placeholder="ما هي أكبر التحديات التي يواجهونها؟"
                value={plan.audience.painPoints}
                onChange={(e) => updateField('audience', 'painPoints', e.target.value)}
                className="builder-textarea"
              />
            </div>
            <div className="builder-form-group">
              <label className="builder-label">السلوك الشرائي</label>
              <Input
                placeholder="كيف يتخذون قرار الشراء؟"
                value={plan.audience.buyingBehavior}
                onChange={(e) => updateField('audience', 'buyingBehavior', e.target.value)}
                className="builder-input"
              />
            </div>
          </div>
        );
      case 'valueProposition':
        return (
          <div className="builder-card-content">
            <div className="builder-form-group">
              <label className="builder-label">البيان الأساسي (Statement)</label>
              <Textarea
                placeholder="جملة واحدة تلخص القيمة التي تقدمها..."
                value={plan.valueProposition.statement}
                onChange={(e) => updateField('valueProposition', 'statement', e.target.value)}
                className="builder-textarea"
              />
            </div>
            <div className="builder-form-group">
              <label className="builder-label">الفوائد الرئيسية (افصل بينها بفاصلة)</label>
              <Input
                placeholder="توفير الوقت، زيادة المبيعات، سهولة الاستخدام"
                value={plan.valueProposition.keyBenefits.join('، ')}
                onChange={(e) => updateField('valueProposition', 'keyBenefits', e.target.value.split('،').map(s => s.trim()))}
                className="builder-input"
              />
            </div>
          </div>
        );
      case 'channels':
        return (
          <div className="builder-card-content">
            <div className="builder-form-group">
              <label className="builder-label">القنوات الأساسية (افصل بينها بفاصلة)</label>
              <Input
                placeholder="مثال: إعلانات جوجل، تيك توك، SEO"
                value={plan.channels.primary.join('، ')}
                onChange={(e) => updateField('channels', 'primary', e.target.value.split('،').map(s => s.trim()))}
                className="builder-input"
              />
            </div>
            <div className="builder-form-group">
              <label className="builder-label">القنوات الثانوية (افصل بينها بفاصلة)</label>
              <Input
                placeholder="مثال: النشرة البريدية، العلاقات العامة"
                value={plan.channels.secondary.join('، ')}
                onChange={(e) => updateField('channels', 'secondary', e.target.value.split('،').map(s => s.trim()))}
                className="builder-input"
              />
            </div>
          </div>
        );
      case 'strategy':
        return (
          <div className="builder-card-content">
            <div className="builder-form-group">
              <label className="builder-label">الوعي (Awareness)</label>
              <Input
                placeholder="كيف سيعرفون عنك؟"
                value={plan.strategy.awareness}
                onChange={(e) => updateField('strategy', 'awareness', e.target.value)}
                className="builder-input"
              />
            </div>
            <div className="builder-form-group">
              <label className="builder-label">الاهتمام (Consideration)</label>
              <Input
                placeholder="كيف ستقنعهم بالاهتمام بمنتجك؟"
                value={plan.strategy.consideration}
                onChange={(e) => updateField('strategy', 'consideration', e.target.value)}
                className="builder-input"
              />
            </div>
            <div className="builder-form-group">
              <label className="builder-label">التحويل (Conversion)</label>
              <Input
                placeholder="كيف ستدفعهم للشراء؟"
                value={plan.strategy.conversion}
                onChange={(e) => updateField('strategy', 'conversion', e.target.value)}
                className="builder-input"
              />
            </div>
            <div className="builder-form-group">
              <label className="builder-label">الاحتفاظ (Retention)</label>
              <Input
                placeholder="كيف ستجعلهم يعودون مرة أخرى؟"
                value={plan.strategy.retention}
                onChange={(e) => updateField('strategy', 'retention', e.target.value)}
                className="builder-input"
              />
            </div>
          </div>
        );
      case 'budget':
        return (
          <div className="builder-card-content">
            <div className="builder-form-group">
              <label className="builder-label">الميزانية الإجمالية</label>
              <Input
                placeholder="مثال: 10,000 دولار شهرياً"
                value={plan.budget.total}
                onChange={(e) => updateField('budget', 'total', e.target.value)}
                className="builder-input"
              />
            </div>
            <div className="builder-form-group">
              <label className="builder-label">توزيع الميزانية</label>
              <Textarea
                placeholder="مثال: 40% إعلانات، 30% صناعة محتوى، 30% أدوات"
                value={plan.budget.allocation}
                onChange={(e) => updateField('budget', 'allocation', e.target.value)}
                className="builder-textarea"
              />
            </div>
          </div>
        );
      case 'kpis':
        return (
          <div className="builder-card-content">
            <div className="builder-form-group">
              <label className="builder-label">المؤشرات الأساسية (افصل بينها بفاصلة)</label>
              <Input
                placeholder="مثال: تكلفة الاستحواذ (CAC)، العائد على الإعلان (ROAS)"
                value={plan.kpis.primary.join('، ')}
                onChange={(e) => updateField('kpis', 'primary', e.target.value.split('،').map(s => s.trim()))}
                className="builder-input"
              />
            </div>
            <div className="builder-form-group">
              <label className="builder-label">المؤشرات الثانوية (افصل بينها بفاصلة)</label>
              <Input
                placeholder="مثال: معدل النقر (CTR)، عدد الزيارات"
                value={plan.kpis.secondary.join('، ')}
                onChange={(e) => updateField('kpis', 'secondary', e.target.value.split('،').map(s => s.trim()))}
                className="builder-input"
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="builder-container">
      {/* Sidebar */}
      <aside className="builder-sidebar">
        <div className="mb-12">
          <Input
            value={plan.title}
            onChange={(e) => updatePlan(id!, { title: e.target.value })}
            className="builder-title-input"
            placeholder="عنوان الخطة"
          />
        </div>

        <nav className="builder-nav">
          {STEPS.map((step, index) => (
            <button
              key={step.id}
              onClick={() => setCurrentStep(index)}
              className={`builder-nav-item ${currentStep === index
                ? 'builder-nav-item-active'
                : ''
                }`}
            >
              <div className={`builder-step-indicator ${currentStep === index ? 'builder-step-indicator-active' : 'builder-step-indicator-default'
                }`}>
                {index + 1}
              </div>
              {step.title}
              {currentStep > index && <CheckCircle2 className="builder-step-complete-icon" />}
            </button>
          ))}
        </nav>

        <div className="builder-present-btn">
          <Button
            onClick={() => navigate(`/present/${id}`)}
            className="w-full"
            size="lg"
          >
            <Play className="w-4 h-4" />
            عرض الخطة
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="builder-main">
        <div className="builder-content">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <Card className="builder-card">
                <CardHeader className="builder-card-header">
                  <div className="builder-progress-label">
                    <span className="builder-progress-text">الخطوة {currentStep + 1} من {STEPS.length}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="builder-ai-suggest-btn"
                      onClick={() => setIsAIModalOpen(true)}
                    >
                      <Sparkles className="w-4 h-4" />
                      اقتراح بالذكاء الاصطناعي
                    </Button>
                  </div>
                  <CardTitle className="builder-title">{STEPS[currentStep].title}</CardTitle>
                  <CardDescription className="builder-description">{STEPS[currentStep].desc}</CardDescription>
                </CardHeader>
                <CardContent className="builder-card-content">
                  {renderStepContent()}
                </CardContent>
              </Card>

              <div className="builder-navigation">
                <Button
                  variant="outline"
                  onClick={handlePrev}
                  disabled={currentStep === 0}
                  className="builder-prev-btn"
                >
                  <ArrowRight className="w-4 h-4" />
                  السابق
                </Button>
                <Button
                  onClick={handleNext}
                  className="builder-next-btn"
                  size="lg"
                >
                  {currentStep === STEPS.length - 1 ? 'إنهاء وعرض' : 'التالي'}
                  {currentStep !== STEPS.length - 1 && <ArrowLeft className="w-4 h-4" />}
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {isAIModalOpen && (
        <div className="fixed inset-0 z-50">
          <Modal
            isOpen={isAIModalOpen}
            onClose={() => setIsAIModalOpen(false)}
            title="المساعد الذكي لبناء الخطة"
          >
            <AIAssistant planId={id!} onClose={() => setIsAIModalOpen(false)} />
          </Modal>
        </div>
      )}
    </div>
  );
}
