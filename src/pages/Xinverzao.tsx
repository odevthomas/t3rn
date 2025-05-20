
import { motion } from "framer-motion";
import { Helmet } from 'react-helmet';
import { Link } from "react-router-dom";
import { ArrowLeft, LayoutDashboard, Users, MessageSquare, BarChart, PieChart } from "lucide-react";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";

// Dados simulados para o dashboard
const recentUsers = [
  { id: 1, name: "Carlos Silva", email: "carlos@example.com", status: "Ativo", lastLogin: "Hoje" },
  { id: 2, name: "Marina Costa", email: "marina@example.com", status: "Ativo", lastLogin: "Ontem" },
  { id: 3, name: "João Ferreira", email: "joao@example.com", status: "Inativo", lastLogin: "3 dias atrás" },
];

const messageStats = [
  { type: "Recebidas", value: 128 },
  { type: "Respondidas", value: 85 },
  { type: "Pendentes", value: 43 },
];

const Xinverzao = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col bg-grid-pattern">
      <Helmet>
        <title>T3RN Desenvolvimento | Dashboard</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <header className="p-6 border-b border-gray-800">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
              <ArrowLeft size={18} />
              <span>Voltar</span>
            </Link>
            <h1 className="text-xl font-bold hidden md:block">Dashboard T3RN</h1>
          </div>
          <div>
            <Link to="/admin" className="bg-black hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors">
              Acessar CRM
            </Link>
          </div>
        </div>
      </header>
      
      <main className="flex-1 container mx-auto py-8 px-4 md:px-6">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-6">
            <LayoutDashboard className="h-6 w-6 text-gray-400" />
            <h1 className="text-2xl font-bold">Painel Principal</h1>
          </div>
          
          {/* Cards de estatísticas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-black p-6 rounded-xl border border-gray-800 shadow-elegant"
            >
              <div className="flex justify-between">
                <div>
                  <p className="text-gray-400">Usuários</p>
                  <p className="text-3xl font-bold mt-1">752</p>
                </div>
                <div className="p-3 bg-black rounded-full">
                  <Users className="h-6 w-6 text-gray-300" />
                </div>
              </div>
              <p className="text-green-500 text-sm mt-4">↑ 12% comparado ao mês passado</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="bg-black p-6 rounded-xl border border-gray-800 shadow-elegant"
            >
              <div className="flex justify-between">
                <div>
                  <p className="text-gray-400">Mensagens</p>
                  <p className="text-3xl font-bold mt-1">128</p>
                </div>
                <div className="p-3 bg-black rounded-full">
                  <MessageSquare className="h-6 w-6 text-gray-300" />
                </div>
              </div>
              <p className="text-green-500 text-sm mt-4">↑ 8% comparado ao mês passado</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="bg-black p-6 rounded-xl border border-gray-800 shadow-elegant"
            >
              <div className="flex justify-between">
                <div>
                  <p className="text-gray-400">Taxa de Conversão</p>
                  <p className="text-3xl font-bold mt-1">24%</p>
                </div>
                <div className="p-3 bg-black rounded-full">
                  <PieChart className="h-6 w-6 text-gray-300" />
                </div>
              </div>
              <p className="text-green-500 text-sm mt-4">↑ 3% comparado ao mês passado</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              className="bg-black p-6 rounded-xl border border-gray-800 shadow-elegant"
            >
              <div className="flex justify-between">
                <div>
                  <p className="text-gray-400">Projetos Ativos</p>
                  <p className="text-3xl font-bold mt-1">18</p>
                </div>
                <div className="p-3 bg-black rounded-full">
                  <BarChart className="h-6 w-6 text-gray-300" />
                </div>
              </div>
              <p className="text-green-500 text-sm mt-4">↑ 5% comparado ao mês passado</p>
            </motion.div>
          </div>
        </div>
        
        {/* Últimos usuários */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 mb-4">
            <Users className="h-5 w-5 text-gray-400" />
            <h2 className="text-xl font-bold">Últimos Usuários</h2>
          </div>
          <div className="bg-black rounded-xl border border-gray-800 overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nome</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Último Login</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentUsers.map((user) => (
                  <TableRow key={user.id} className="hover:bg-black">
                    <TableCell className="font-medium">{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        user.status === "Ativo" ? "bg-green-900 text-green-400" : "bg-red-900 text-red-400"
                      }`}>
                        {user.status}
                      </span>
                    </TableCell>
                    <TableCell>{user.lastLogin}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </motion.div>
        
        {/* Mensagens */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <MessageSquare className="h-5 w-5 text-gray-400" />
            <h2 className="text-xl font-bold">Análise de Mensagens</h2>
          </div>
          <div className="bg-black p-6 rounded-xl border border-gray-800">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {messageStats.map((stat) => (
                <div key={stat.type} className="bg-black p-4 rounded-lg">
                  <h3 className="text-gray-400">{stat.type}</h3>
                  <p className="text-2xl font-bold mt-1">{stat.value}</p>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <div className="w-full bg-black rounded-full h-2.5 mb-1">
                <div className="bg-gradient-to-r from-gray-500 to-gray-300 h-2.5 rounded-full" style={{ width: "66%" }}></div>
              </div>
              <div className="flex justify-between text-xs text-gray-400">
                <span>66% de mensagens respondidas</span>
                <span>Meta: 80%</span>
              </div>
            </div>
          </div>
        </motion.div>
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

export default Xinverzao;
