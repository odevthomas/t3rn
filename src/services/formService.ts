
// Serviço para lidar com envio de formulários e dados

// Função para salvar mensagem de contato
export const saveContactMessage = async (formData: {
  name: string;
  email: string;
  phone?: string;
  message: string;
}) => {
  try {
    // Simula um envio para API com Promise
    return new Promise<{ success: boolean; message: string }>((resolve) => {
      console.log("Dados do formulário de contato:", formData);
      
      // Simula atraso de rede para parecer mais real
      setTimeout(() => {
        // Em produção, aqui enviaria para um servidor real
        // Por enquanto apenas valida e retorna sucesso
        if (!formData.name || !formData.email || !formData.message) {
          resolve({ success: false, message: "Por favor, preencha todos os campos obrigatórios." });
          return;
        }

        if (!isValidEmail(formData.email)) {
          resolve({ success: false, message: "Por favor, forneça um e-mail válido." });
          return;
        }

        // Salva dados no localStorage
        const storedMessages = localStorage.getItem('contactMessages');
        const messages = storedMessages ? JSON.parse(storedMessages) : [];
        
        const newMessage = {
          ...formData,
          id: Date.now(),
          date: new Date().toISOString()
        };
        
        messages.push(newMessage);
        localStorage.setItem('contactMessages', JSON.stringify(messages));
        
        resolve({ 
          success: true, 
          message: "Mensagem enviada com sucesso! Entraremos em contato em breve." 
        });
      }, 800);
    });
  } catch (error) {
    console.error("Erro ao enviar formulário:", error);
    return { success: false, message: "Ocorreu um erro ao enviar sua mensagem. Tente novamente." };
  }
};

// Função para salvar inscrição na newsletter
export const saveNewsletter = async (email: string) => {
  try {
    return new Promise<{ success: boolean; message: string }>((resolve) => {
      console.log("Email para newsletter:", email);
      
      setTimeout(() => {
        if (!email || !isValidEmail(email)) {
          resolve({ success: false, message: "Por favor, forneça um e-mail válido." });
          return;
        }

        // Salva no localStorage
        const storedEmails = localStorage.getItem('newsletterEmails');
        const emails = storedEmails ? JSON.parse(storedEmails) : [];
        
        if (emails.includes(email)) {
          resolve({ success: false, message: "Este e-mail já está inscrito." });
          return;
        }
        
        emails.push(email);
        localStorage.setItem('newsletterEmails', JSON.stringify(emails));
        
        resolve({ 
          success: true, 
          message: "Obrigado por se inscrever em nossa newsletter!" 
        });
      }, 600);
    });
  } catch (error) {
    console.error("Erro ao salvar newsletter:", error);
    return { success: false, message: "Ocorreu um erro ao processar sua inscrição. Tente novamente." };
  }
};

// Limpar todos os dados salvos
export const clearAllData = () => {
  localStorage.removeItem('contactMessages');
  localStorage.removeItem('newsletterEmails');
  return { success: true, message: "Todos os dados foram removidos com sucesso." };
};

// Obter todas as mensagens salvas
export const getAllMessages = () => {
  const storedMessages = localStorage.getItem('contactMessages');
  return storedMessages ? JSON.parse(storedMessages) : [];
};

// Obter todos os emails da newsletter
export const getAllNewsletterEmails = () => {
  const storedEmails = localStorage.getItem('newsletterEmails');
  return storedEmails ? JSON.parse(storedEmails) : [];
};

// Deletar uma mensagem específica
export const deleteMessage = (id: number) => {
  const storedMessages = localStorage.getItem('contactMessages');
  if (!storedMessages) return { success: false, message: "Nenhuma mensagem encontrada." };
  
  const messages = JSON.parse(storedMessages);
  const updatedMessages = messages.filter((msg: any) => msg.id !== id);
  
  localStorage.setItem('contactMessages', JSON.stringify(updatedMessages));
  return { success: true, message: "Mensagem deletada com sucesso." };
};

// Deletar um email específico da newsletter
export const deleteNewsletterEmail = (email: string) => {
  const storedEmails = localStorage.getItem('newsletterEmails');
  if (!storedEmails) return { success: false, message: "Nenhum email encontrado." };
  
  const emails = JSON.parse(storedEmails);
  const updatedEmails = emails.filter((e: string) => e !== email);
  
  localStorage.setItem('newsletterEmails', JSON.stringify(updatedEmails));
  return { success: true, message: "Email removido com sucesso." };
};

// Validador simples de email
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
