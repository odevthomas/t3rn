// Simulação de serviço de pagamento com Cora Bank
// Em um ambiente de produção, você usaria a API oficial do Cora Bank

interface PaymentDetails {
  amount: number;
  description?: string;
  paymentMethod: 'credit' | 'debit' | 'pix' | 'boleto' | 'transfer';
  installments?: number;
  customerInfo?: {
    name: string;
    email: string;
    document?: string; // CPF ou CNPJ
    phone?: string;
  };
}

interface PaymentResponse {
  success: boolean;
  paymentId?: string;
  status?: 'created' | 'processing' | 'paid' | 'failed' | 'canceled';
  paymentUrl?: string;
  qrCode?: string;
  message?: string;
}

// Simula o processo de pagamento com Cora Bank
export const createCoraPayment = async (details: PaymentDetails): Promise<PaymentResponse> => {
  // Simular atraso de rede
  await new Promise(resolve => setTimeout(resolve, 1500));

  // Simulação de API de pagamento
  if (!details.amount || details.amount <= 0) {
    return {
      success: false,
      message: 'Valor inválido'
    };
  }

  // Gera um ID de pagamento simulado
  const paymentId = `CORA-${Math.random().toString(36).substring(2, 15)}`;

  // Simula URLs de pagamento diferentes baseado no método de pagamento
  let paymentUrl = `https://api.cora.com.br/payments/${paymentId}`;
  let qrCode = null;

  if (details.paymentMethod === 'pix') {
    qrCode = 'data:image/png;base64,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';
  }

  return {
    success: true,
    paymentId,
    status: 'created',
    paymentUrl,
    qrCode,
    message: `Pagamento ${details.paymentMethod} criado com sucesso`
  };
};

// Simula obter status de pagamento
export const getCoraPaymentStatus = async (paymentId: string): Promise<PaymentResponse> => {
  // Simular atraso de rede
  await new Promise(resolve => setTimeout(resolve, 800));

  // Simulação simplificada
  if (!paymentId.startsWith('CORA-')) {
    return {
      success: false,
      message: 'ID de pagamento inválido'
    };
  }

  // Simulação de status aleatório para demonstração
  const statuses = ['processing', 'paid', 'processing', 'processing', 'paid'];
  const randomStatus = statuses[Math.floor(Math.random() * statuses.length)] as 'processing' | 'paid';

  return {
    success: true,
    paymentId,
    status: randomStatus,
    message: randomStatus === 'paid' ? 'Pagamento confirmado' : 'Pagamento em processamento'
  };
};

// Lista de taxas por método de pagamento
export const getCoraFees = () => {
  return {
    credit: {
      fee: '2.99%',
      installments: {
        '1x': '2.99%',
        '2x-6x': '3.49% + 1.99% a.m.',
        '7x-12x': '3.99% + 2.29% a.m.'
      }
    },
    debit: {
      fee: '1.99%'
    },
    pix: {
      fee: '0.99%'
    },
    boleto: {
      fee: '1.90% + R$2.50'
    },
    transfer: {
      fee: '0.00%'
    }
  };
};
