
import { motion } from "framer-motion";
import { useState } from "react";
import { Helmet } from 'react-helmet';
import { Link } from "react-router-dom";
import { ArrowLeft, Users, Search, MessageSquare, Edit, Trash2, UserPlus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";

// Dados simulados para o CRM
const customersData = [
  { 
    id: 1, 
    name: "Carlos Silva", 
    email: "carlos@example.com", 
    phone: "(11) 98765-4321", 
    status: "Cliente", 
    lastContact: "Hoje", 
    notes: "Interessado em desenvolvimento de e-commerce."
  },
  { 
    id: 2, 
    name: "Marina Costa", 
    email: "marina@example.com", 
    phone: "(21) 99876-5432", 
    status: "Prospect", 
    lastContact: "3 dias atrás",
    notes: "Aguardando proposta para aplicativo móvel."
  },
  { 
    id: 3, 
    name: "João Ferreira", 
    email: "joao@example.com", 
    phone: "(11) 97654-3210", 
    status: "Cliente", 
    lastContact: "5 dias atrás",
    notes: "Contrato renovado recentemente. Cliente satisfeito."
  },
  { 
    id: 4, 
    name: "Ana Beatriz", 
    email: "ana@example.com", 
    phone: "(51) 98765-4321", 
    status: "Lead", 
    lastContact: "2 dias atrás",
    notes: "Interesse em website institucional."
  },
  { 
    id: 5, 
    name: "Ricardo Gomes", 
    email: "ricardo@example.com", 
    phone: "(31) 99876-5432", 
    status: "Cliente", 
    lastContact: "Ontem",
    notes: "Projeto em andamento, fase de desenvolvimento."
  }
];

// Dados de mensagens recentes
const recentMessages = [
  { 
    id: 1, 
    from: "Carlos Silva", 
    email: "carlos@example.com",
    subject: "Dúvida sobre projeto", 
    time: "Hoje, 10:45",
    content: "Olá, gostaria de saber quando teremos a próxima reunião de alinhamento do projeto..."
  },
  { 
    id: 2, 
    from: "Marina Costa", 
    email: "marina@example.com",
    subject: "Solicitação de orçamento", 
    time: "Ontem, 14:30",
    content: "Boa tarde, estou interessada nos serviços de desenvolvimento web. Poderia me enviar um orçamento para..."
  },
  { 
    id: 3, 
    from: "João Ferreira", 
    email: "joao@example.com",
    subject: "Feedback sobre entrega", 
    time: "3 dias atrás",
    content: "Recebemos a última entrega e estamos muito satisfeitos com o resultado. Apenas notamos um pequeno ajuste necessário..."
  }
];

const Admin = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("clients");

  const filteredCustomers = customersData.filter(
    (customer) =>
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.phone.includes(searchTerm)
  );

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Helmet>
        <title>T3RN Desenvolvimento | CRM</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <header className="p-6 border-b border-gray-800">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
              <ArrowLeft size={18} />
              <span>Voltar</span>
            </Link>
            <h1 className="text-xl font-bold hidden md:block">CRM T3RN</h1>
          </div>
          <div>
            <Link to="/xinverzao" className="bg-black hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors">
              Ver Dashboard
            </Link>
          </div>
        </div>
      </header>
      
      <main className="flex-1 container mx-auto py-8 px-4 md:px-6">
        {/* Barra de busca e botões de ação */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Buscar clientes..."
                className="pl-10 bg-black border-gray-800 text-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <button className="bg-black hover:bg-gray-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
                <UserPlus size={18} />
                <span className="hidden md:inline">Novo Cliente</span>
              </button>
              <button className="bg-black hover:bg-gray-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
                <MessageSquare size={18} />
                <span className="hidden md:inline">Nova Mensagem</span>
              </button>
            </div>
          </div>
          
          {/* Abas */}
          <div className="flex gap-1 mb-6 overflow-x-auto">
            <button
              onClick={() => setActiveTab("clients")}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${
                activeTab === "clients"
                  ? "bg-gray-700 text-white"
                  : "bg-black text-gray-400 hover:bg-black"
              }`}
            >
              <span className="flex items-center gap-2">
                <Users size={16} />
                Clientes (5)
              </span>
            </button>
            <button
              onClick={() => setActiveTab("messages")}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${
                activeTab === "messages"
                  ? "bg-gray-700 text-white"
                  : "bg-black text-gray-400 hover:bg-black"
              }`}
            >
              <span className="flex items-center gap-2">
                <MessageSquare size={16} />
                Mensagens (3)
              </span>
            </button>
          </div>
        </motion.div>

        {/* Lista de Clientes */}
        {activeTab === "clients" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-black rounded-xl border border-gray-800 overflow-hidden"
          >
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nome</TableHead>
                  <TableHead className="hidden md:table-cell">Email</TableHead>
                  <TableHead className="hidden lg:table-cell">Telefone</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="hidden md:table-cell">Último Contato</TableHead>
                  <TableHead className="text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredCustomers.map((customer) => (
                  <TableRow key={customer.id} className="hover:bg-black">
                    <TableCell className="font-medium">{customer.name}</TableCell>
                    <TableCell className="hidden md:table-cell">{customer.email}</TableCell>
                    <TableCell className="hidden lg:table-cell">{customer.phone}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        customer.status === "Cliente" 
                          ? "bg-green-900 text-green-400" 
                          : customer.status === "Prospect"
                            ? "bg-blue-900 text-blue-400"
                            : "bg-yellow-900 text-yellow-400" 
                      }`}>
                        {customer.status}
                      </span>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">{customer.lastContact}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <HoverCard>
                          <HoverCardTrigger asChild>
                            <button className="p-2 rounded-lg hover:bg-gray-700 transition-colors">
                              <Search className="h-4 w-4" />
                            </button>
                          </HoverCardTrigger>
                          <HoverCardContent className="bg-black border border-gray-700 text-white w-80">
                            <div className="space-y-2">
                              <h4 className="font-medium">{customer.name}</h4>
                              <p className="text-sm text-gray-400">{customer.email}</p>
                              <p className="text-sm text-gray-400">{customer.phone}</p>
                              <div className="pt-2 border-t border-gray-700">
                                <h5 className="text-sm font-medium mb-1">Notas:</h5>
                                <p className="text-sm text-gray-300">{customer.notes}</p>
                              </div>
                            </div>
                          </HoverCardContent>
                        </HoverCard>
                        <button className="p-2 rounded-lg hover:bg-gray-700 transition-colors">
                          <Edit className="h-4 w-4" />
                        </button>
                        <button className="p-2 rounded-lg hover:bg-red-900 transition-colors">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </motion.div>
        )}

        {/* Lista de Mensagens */}
        {activeTab === "messages" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="space-y-4">
              {recentMessages.map((message) => (
                <div 
                  key={message.id} 
                  className="bg-black rounded-xl border border-gray-800 p-4 hover:bg-black transition-colors cursor-pointer"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-medium">{message.from}</h3>
                      <p className="text-sm text-gray-400">{message.email}</p>
                    </div>
                    <span className="text-xs text-gray-500">{message.time}</span>
                  </div>
                  <h4 className="text-sm font-medium mb-2">{message.subject}</h4>
                  <p className="text-sm text-gray-300 line-clamp-2">{message.content}</p>
                  <div className="flex justify-end mt-4">
                    <button className="px-3 py-1 bg-black hover:bg-gray-700 rounded text-sm flex items-center gap-1 transition-colors">
                      <MessageSquare size={14} />
                      Responder
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </main>
      
      <footer className="border-t border-gray-800 py-6 mt-auto">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} T3RN Desenvolvimento. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Admin;
