
import { useState } from 'react';
import { toast } from '@/hooks/use-toast';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { 
  Form, 
  FormControl, 
  FormDescription, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from '@/components/ui/form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import LoadingSpinner from './LoadingSpinner';

// Define schema for form validation
const formSchema = z.object({
  name: z.string().min(2, { message: 'Nome deve ter pelo menos 2 caracteres' }),
  email: z.string().email({ message: 'Email inválido' }),
  phone: z.string().min(10, { message: 'Telefone deve ter pelo menos 10 dígitos' }),
  businessType: z.enum(['individual', 'small', 'medium', 'large'], {
    required_error: "Por favor selecione o tipo de negócio",
  }),
  budget: z.enum(['under5k', '5kto20k', '20kto50k', 'over50k'], {
    required_error: "Por favor selecione um orçamento",
  }),
  projectGoals: z.string().min(10, { message: 'Por favor descreva seus objetivos em pelo menos 10 caracteres' }),
  services: z.array(z.string()).nonempty({ message: 'Selecione pelo menos um serviço' }),
  howHeard: z.string().optional(),
  contactConsent: z.boolean().refine(val => val === true, { message: 'Você deve concordar com os termos' }),
});

type FormData = z.infer<typeof formSchema>;

const CustomerQuestionnaire = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      businessType: 'small',
      budget: '5kto20k',
      projectGoals: '',
      services: [],
      howHeard: '',
      contactConsent: false,
    }
  });
  
  const serviceOptions = [
    { id: 'webdev', label: 'Desenvolvimento Web' },
    { id: 'mobileapp', label: 'Aplicativos Móveis' },
    { id: 'ecommerce', label: 'E-commerce' },
    { id: 'design', label: 'Design UX/UI' },
    { id: 'seo', label: 'SEO e Marketing Digital' },
    { id: 'maintenance', label: 'Manutenção e Suporte' },
  ];
  
  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, totalSteps));
  };
  
  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };
  
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulando envio para API
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Questionário enviado:', data);
      
      toast({
        title: "Questionário enviado com sucesso!",
        description: "Entraremos em contato em breve.",
      });
      
      form.reset();
      setCurrentStep(1);
    } catch (error) {
      console.error('Erro ao enviar questionário:', error);
      toast({
        variant: "destructive",
        title: "Erro ao enviar",
        description: "Ocorreu um erro ao enviar o questionário. Tente novamente mais tarde.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="questionnaire" className="py-16 questionnaire-container">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold mb-2 text-center">Conte-nos sobre seu projeto</h2>
        <p className="text-gray-400 mb-10 text-center">Responda algumas perguntas para que possamos entender melhor suas necessidades</p>
        
        <div className="absolute inset-0 bg-gradient-to-b from-green-50 to-white dark:from-gray-950 dark:to-gray-900 -z-10"></div>

        <div className="mb-8 flex justify-center">
          <div className="flex space-x-2">
            {Array.from({ length: totalSteps }).map((_, i) => (
              <div 
                key={i} 
                className={`h-2 w-8 rounded-full ${
                  i + 1 === currentStep 
                    ? 'bg-gray-100' 
                    : i + 1 < currentStep 
                      ? 'bg-gray-500' 
                      : 'bg-black'
                }`}
              />
            ))}
          </div>
        </div>
        
        <Card className="border-gray-800 bg-black shadow-lg">
          <CardHeader>
            <CardTitle>
              {currentStep === 1 && "Informações Básicas"}
              {currentStep === 2 && "Sobre seu Negócio"}
              {currentStep === 3 && "Detalhes do Projeto"}
              {currentStep === 4 && "Finalizar"}
            </CardTitle>
            <CardDescription>
              {currentStep === 1 && "Conte-nos um pouco sobre você"}
              {currentStep === 2 && "Ajude-nos a entender seu negócio"}
              {currentStep === 3 && "Descreva o que você precisa"}
              {currentStep === 4 && "Últimos detalhes antes de enviar"}
            </CardDescription>
          </CardHeader>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <CardContent className="space-y-6">
                {/* Step 1: Basic Information */}
                {currentStep === 1 && (
                  <>
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nome Completo</FormLabel>
                          <FormControl>
                            <Input placeholder="Seu nome" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="seu@email.com" type="email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Telefone</FormLabel>
                          <FormControl>
                            <Input placeholder="(XX) XXXXX-XXXX" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </>
                )}
                
                {/* Step 2: Business Information */}
                {currentStep === 2 && (
                  <>
                    <FormField
                      control={form.control}
                      name="businessType"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel>Tipo de Negócio</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-col space-y-1"
                            >
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="individual" />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  Profissional Autônomo
                                </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="small" />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  Pequena Empresa (1-10 funcionários)
                                </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="medium" />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  Média Empresa (11-50 funcionários)
                                </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="large" />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  Grande Empresa (51+ funcionários)
                                </FormLabel>
                              </FormItem>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="budget"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel>Orçamento Aproximado</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-col space-y-1"
                            >
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="under5k" />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  Menos de R$ 5.000
                                </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="5kto20k" />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  R$ 5.000 - R$ 20.000
                                </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="20kto50k" />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  R$ 20.000 - R$ 50.000
                                </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="over50k" />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  Mais de R$ 50.000
                                </FormLabel>
                              </FormItem>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </>
                )}
                
                {/* Step 3: Project Details */}
                {currentStep === 3 && (
                  <>
                    <FormField
                      control={form.control}
                      name="services"
                      render={() => (
                        <FormItem>
                          <div className="mb-4">
                            <FormLabel>Quais serviços você precisa?</FormLabel>
                            <FormDescription>
                              Selecione todos os que se aplicam.
                            </FormDescription>
                          </div>
                          {serviceOptions.map((option) => (
                            <FormField
                              key={option.id}
                              control={form.control}
                              name="services"
                              render={({ field }) => {
                                return (
                                  <FormItem
                                    key={option.id}
                                    className="flex flex-row items-start space-x-3 space-y-0"
                                  >
                                    <FormControl>
                                      <Checkbox
                                        checked={field.value?.includes(option.id)}
                                        onCheckedChange={(checked) => {
                                          return checked
                                            ? field.onChange([...field.value, option.id])
                                            : field.onChange(
                                                field.value?.filter(
                                                  (value) => value !== option.id
                                                )
                                              )
                                        }}
                                      />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                      {option.label}
                                    </FormLabel>
                                  </FormItem>
                                )
                              }}
                            />
                          ))}
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="projectGoals"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Objetivos do Projeto</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Descreva o que você espera alcançar com este projeto..."
                              className="resize-none h-32"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            Seja o mais específico possível sobre suas necessidades e expectativas.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </>
                )}
                
                {/* Step 4: Final Details */}
                {currentStep === 4 && (
                  <>
                    <FormField
                      control={form.control}
                      name="howHeard"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Como você conheceu a T3RN?</FormLabel>
                          <FormControl>
                            <Input placeholder="Google, indicação, redes sociais, etc." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="contactConsent"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>
                              Concordo em receber contatos sobre este projeto e outras informações da T3RN
                            </FormLabel>
                            <FormDescription>
                              Você pode cancelar a qualquer momento. Veja nossa Política de Privacidade.
                            </FormDescription>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </>
                )}
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={prevStep}
                  disabled={currentStep === 1 || isSubmitting}
                >
                  {currentStep > 1 ? "Voltar" : "Cancelar"}
                </Button>
                
                {currentStep < totalSteps ? (
                  <Button 
                    type="button" 
                    onClick={nextStep}
                  >
                    Próximo
                  </Button>
                ) : (
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? <LoadingSpinner /> : "Enviar Questionário"}
                  </Button>
                )}
              </CardFooter>
            </form>
          </Form>
        </Card>
      </div>
    </section>
  );
};

export default CustomerQuestionnaire;
