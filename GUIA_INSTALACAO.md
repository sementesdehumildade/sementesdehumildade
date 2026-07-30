# 🌱 Grupo Espírita Sementes de Humildade - Guia de Instalação

## 📋 Pré-requisitos

Antes de começar, você precisa ter instalado na sua máquina:

1. **Node.js** (versão 18 ou superior)
   - Download: https://nodejs.org/pt-br
   - Para verificar se está instalado: `node --version`

2. **npm** (já vem com o Node.js)
   - Para verificar: `npm --version`

3. **Editor de código** (opcional, mas recomendado)
   - VS Code: https://code.visualstudio.com/

---

## 📥 Como Baixar o Projeto do Figma Make

### Opção 1: Copiar Arquivos Manualmente
1. No Figma Make, navegue por cada arquivo na árvore de pastas
2. Copie o conteúdo de cada arquivo
3. Crie a mesma estrutura de pastas no seu computador
4. Cole o conteúdo em cada arquivo correspondente

### Opção 2: Usar Exportação (se disponível)
- Procure por opções de menu como "File" → "Export" ou "Download"
- Alguns usuários reportam um ícone de 3 pontos (⋮) no canto superior direito

### Opção 3: Usar Integração com GitHub (recomendado)
- Se o Figma Make oferece integração com GitHub, use-a para fazer push do código
- Depois clone o repositório na sua máquina: `git clone [URL_DO_SEU_REPO]`

---

## 🚀 Configuração e Execução Local

### Passo 1: Abrir o Terminal/Prompt de Comando
- **Windows**: Pressione `Win + R`, digite `cmd` e pressione Enter
- **Mac/Linux**: Abra o aplicativo Terminal
- Navegue até a pasta do projeto: `cd caminho/para/o/projeto`

### Passo 2: Instalar Dependências
```bash
npm install
```
⏳ Isso pode levar alguns minutos na primeira vez.

### Passo 3: Rodar o Servidor de Desenvolvimento
```bash
npm run dev
```

✅ O site estará disponível em: **http://localhost:5173**

Para parar o servidor, pressione `Ctrl + C` no terminal.

---

## 📦 Gerar Build para Produção

Quando estiver pronto para publicar o site:

```bash
npm run build
```

Isso criará uma pasta `/dist` com todos os arquivos otimizados e prontos para hospedagem.

---

## 🌐 Opções de Hospedagem

### 1. **Vercel** (Recomendado - Gratuito e Fácil)
```bash
# Instalar CLI do Vercel
npm install -g vercel

# Fazer deploy
vercel
```
Siga as instruções no terminal. Seu site estará online em minutos!

### 2. **Netlify** (Gratuito)
1. Acesse https://www.netlify.com/
2. Crie uma conta gratuita
3. Arraste a pasta `/dist` para a área de drop
4. Pronto! Seu site está no ar

### 3. **GitHub Pages** (Gratuito)
1. Crie um repositório no GitHub
2. Faça push da pasta `/dist`
3. Nas configurações do repositório, ative GitHub Pages
4. Seu site estará em: `https://seu-usuario.github.io/nome-do-repo`

### 4. **Hospedagem Tradicional (cPanel/FTP)**
1. Execute `npm run build`
2. Faça upload de **todos os arquivos** da pasta `/dist` via FTP
3. Configure o domínio para apontar para essa pasta

### 5. **VPS/Servidor Dedicado**
Configure um servidor web (Nginx ou Apache) para servir a pasta `/dist`.

**Exemplo de configuração Nginx:**
```nginx
server {
    listen 80;
    server_name seudominio.com.br;
    root /caminho/para/o/projeto/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

---

## 📁 Estrutura do Projeto

```
/
├── src/
│   ├── app/
│   │   ├── App.tsx              # Componente principal
│   │   └── components/          # Componentes reutilizáveis
│   │       ├── Header.tsx       # Cabeçalho/Menu
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── Section.tsx
│   │       └── ui/              # Componentes de UI
│   ├── styles/
│   │   ├── index.css
│   │   ├── tailwind.css
│   │   ├── theme.css            # Cores e temas
│   │   └── fonts.css
│   └── imports/                 # Assets importados
├── package.json                 # Dependências do projeto
├── vite.config.ts              # Configuração do Vite
└── GUIA_INSTALACAO.md          # Este arquivo
```

---

## 🎨 Personalização

### Alterar Cores
Edite o arquivo `/src/styles/theme.css`:
- `--color-primary`: #4CAF50 (verde principal)
- `--color-primary-dark`: #2E7D32 (verde escuro)
- `--color-primary-light`: #A5D6A7 (verde claro)

### Alterar Fontes
As fontes estão definidas em `/src/styles/fonts.css`:
- **Montserrat**: Títulos
- **Inter**: Textos

---

## 🔧 Comandos Úteis

| Comando | Descrição |
|---------|-----------|
| `npm install` | Instala todas as dependências |
| `npm run dev` | Inicia servidor de desenvolvimento |
| `npm run build` | Gera build de produção |
| `npm run preview` | Visualiza o build localmente |

---

## ❗ Problemas Comuns

### Erro: "npm: command not found"
- Você precisa instalar o Node.js: https://nodejs.org/

### Erro: "Port 5173 is already in use"
- Outra aplicação está usando essa porta
- Feche outros servidores ou use: `npm run dev -- --port 3000`

### Erro ao instalar dependências
- Tente deletar a pasta `node_modules` e o arquivo `package-lock.json`
- Execute `npm install` novamente

### Página em branco após deploy
- Verifique se o caminho base está correto no `vite.config.ts`
- Em alguns servidores, você precisa configurar `base: './'`

---

## 📞 Informações do Site

**Endereço:**  
Rua Goiás, 253 - Nova Aldeinha  
Barueri - SP, CEP 06440-170

**Cores do Projeto:**
- Verde Principal: #4CAF50
- Verde Escuro: #2E7D32
- Verde Claro: #A5D6A7
- Azul Suave: #90CAF9

**Tipografia:**
- Títulos: Montserrat
- Textos: Inter

---

## 📝 Notas Importantes

1. **Não commite** a pasta `node_modules` (ela é grande e será regenerada com `npm install`)
2. **A pasta `/dist`** só é criada após executar `npm run build`
3. **Sempre teste localmente** antes de fazer deploy
4. **Mantenha backups** do código antes de fazer alterações

---

## 📚 Recursos Adicionais

- **Documentação Vite**: https://vitejs.dev/
- **Documentação React**: https://react.dev/
- **Documentação Tailwind CSS**: https://tailwindcss.com/
- **Lucide Icons**: https://lucide.dev/

---

## ✅ Checklist de Deploy

- [ ] Testei o site localmente com `npm run dev`
- [ ] Executei `npm run build` sem erros
- [ ] Verifiquei o build localmente com `npm run preview`
- [ ] Configurei as variáveis de ambiente (se necessário)
- [ ] Fiz backup do código
- [ ] Escolhi a plataforma de hospedagem
- [ ] Site está no ar e funcionando! 🎉

---

**Desenvolvido para o Grupo Espírita Sementes de Humildade**  
*Acolhimento, simplicidade e espiritualidade* 🌱
