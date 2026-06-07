🚀 CI - Testes Unitários (N1 / N2 / N3)

Este projeto utiliza GitHub Actions para executar testes automatizados de forma contínua, garantindo qualidade e estabilidade no código.
Este pipeline garante que os testes unitários sejam executados automaticamente, fornecendo feedback contínuo sobre a qualidade do código.

⚙️ Tecnologias Utilizadas
GitHub Actions
Node.js (v20)
Yarn
Mochawesome (relatórios de teste)
🔄 Gatilhos do Pipeline

O workflow é executado automaticamente nas seguintes situações:

▶️ Execução manual (workflow_dispatch)
🔁 A cada 30 minutos (cron job)
📌 Push na branch master
🧪 Estrutura do Pipeline

O pipeline possui um job principal:

🔹 Job: unidade

Responsável por executar os testes unitários.

Etapas executadas:
📥 Checkout do código
⚙️ Instalação do Node.js (versão 20)
📦 Instalação do Yarn
📚 Instalação das dependências do projeto
🧪 Execução dos testes unitários
📊 Upload do relatório de testes (mesmo em caso de falha)
📁 Estrutura do Projeto

.github/
└── workflows/
└── ci.yml (ou nome do seu arquivo)

▶️ Como Executar Manualmente
Acesse o repositório no GitHub
Vá até a aba Actions
Selecione o workflow:
N1 - N2 - N3 - Configuração CI - Trabalho Final
Clique em Run workflow
📊 Relatórios de Testes

Os relatórios são gerados utilizando o Mochawesome e ficam disponíveis como artefatos no GitHub Actions.

📍 Caminho:

Actions → Executar pipeline → Artifacts
🚨 Tratamento de Falhas

Mesmo que os testes falhem, o pipeline continuará até o final para garantir que o relatório seja gerado:

if: ${{ always() }}

🧠 Boas Práticas Implementadas
Execução automatizada por agendamento (cron)
Execução manual para testes sob demanda
Geração de relatórios mesmo em caso de erro
Pipeline simples e eficiente