# 🪟 Guia Completo para Windows - Grupo Espírita Sementes de Humildade

## ❗ ANTES DE COMEÇAR - Instalação do Node.js no Windows

### Passo 1: Verificar se o Node.js está instalado

1. Pressione `Win + R` (tecla Windows + R)
2. Digite: `cmd` e pressione Enter
3. Na janela preta que abrir, digite:
   ```
   node --version
   ```
4. Se aparecer algo como `v18.x.x` ou `v20.x.x`, o Node já está instalado ✅
5. Se aparecer **"'node' não é reconhecido como comando"**, você precisa instalar

### Passo 2: Instalar o Node.js (se necessário)

1. Acesse: **https://nodejs.org/pt-br**
2. Clique no botão verde **"Baixar Node.js (LTS)"**
3. Salve o arquivo `.msi` no seu computador
4. **Dê duplo clique** no arquivo baixado
5. Clique em **"Next"** → **"Next"** → **"Next"** → **"Install"**
6. ⚠️ **IMPORTANTE**: Marque a opção **"Automatically install the necessary tools"** se aparecer
7. Aguarde a instalação (pode demorar alguns minutos)
8. Clique em **"Finish"**
9. **REINICIE O COMPUTADOR** (isso é importante!)

### Passo 3: Verificar a Instalação Novamente

Após reiniciar o computador:

1. Pressione `Win + R`
2. Digite: `cmd` e pressione Enter
3. Digite:
   ```
   node --version
   ```
4. Digite também:
   ```
   npm --version
   ```
5. Se os dois comandos mostrarem versões, está tudo certo! ✅

---

## 📥 Como Baixar o Projeto do Figma Make

Infelizmente o Figma Make não tem download direto. Você precisa:

### OPÇÃO 1: Integração com GitHub (Recomendado)
1. No Figma Make, procure por **"Connect to GitHub"** ou **"Export to GitHub"**
2. Autorize a conexão
3. Crie um repositório
4. Depois, no seu Windows:
   - Instale o Git: https://git-scm.com/download/win
   - Abra o Prompt de Comando
   - Digite: `git clone [URL_DO_SEU_REPOSITORIO]`

### OPÇÃO 2: Copiar Manualmente (Trabalhoso mas funciona)
1. Crie uma nova pasta no seu computador (ex: `C:\Sites\sementes-humildade`)
2. No Figma Make, vá em cada arquivo da estrutura
3. Copie o conteúdo (Ctrl+A → Ctrl+C)
4. Crie o mesmo arquivo no seu computador
5. Cole o conteúdo (Ctrl+V)
6. Repita para todos os arquivos

**Estrutura completa de pastas a criar:**
```
C:\Sites\sementes-humildade\
├── src\
│   ├── app\
│   │   ├── App.tsx
│   │   └── components\
│   │       ├── Header.tsx
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── Section.tsx
│   │       └── ui\ (vários arquivos)
│   ├── styles\
│   │   ├── index.css
│   │   ├── tailwind.css
│   │   ├── theme.css
│   │   └── fonts.css
│   └── imports\
├── package.json
├── vite.config.ts
└── postcss.config.mjs
```

---

## 🚀 Rodar o Projeto no Windows

### Passo 1: Abrir o Prompt de Comando na pasta do projeto

**Método 1 (Mais Fácil):**
1. Abra o **Explorador de Arquivos** (Win + E)
2. Navegue até a pasta do projeto (ex: `C:\Sites\sementes-humildade`)
3. Clique na **barra de endereço** (onde mostra o caminho)
4. Digite: `cmd` e pressione **Enter**
5. Uma janela preta (Prompt de Comando) abrirá já na pasta certa ✅

**Método 2:**
1. Pressione `Win + R`
2. Digite: `cmd` e pressione Enter
3. Digite: `cd C:\Sites\sementes-humildade` (ou o caminho da sua pasta)
4. Pressione Enter

### Passo 2: Instalar as Dependências

No Prompt de Comando, digite:

```bash
npm install
```

**Tempo estimado:** 2 a 5 minutos (depende da internet)

**⚠️ Erros Comuns:**

#### ERRO 1: "'npm' não é reconhecido como comando"
**Solução:** 
- O Node.js não foi instalado corretamente
- Reinicie o computador e tente novamente
- Se não funcionar, desinstale e reinstale o Node.js

#### ERRO 2: "EACCES: permission denied"
**Solução:** 
- Feche o Prompt de Comando
- Clique com botão direito no ícone "Prompt de Comando"
- Escolha **"Executar como Administrador"**
- Tente `npm install` novamente

#### ERRO 3: "Network error" ou "ETIMEDOUT"
**Solução:**
- Problema de internet ou firewall
- Desative temporariamente o antivírus/firewall
- Tente novamente

#### ERRO 4: "Maximum call stack size exceeded"
**Solução:**
- Delete a pasta `node_modules` (se existir)
- Delete o arquivo `package-lock.json` (se existir)
- Tente `npm install` novamente

### Passo 3: Rodar o Servidor de Desenvolvimento

Depois que o `npm install` terminar, digite:

```bash
npm run dev
```

**Você verá algo como:**
```
  VITE v6.3.5  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

Abra seu navegador e acesse: **http://localhost:5173**

**Para PARAR o servidor:** Pressione `Ctrl + C` no Prompt de Comando

---

## 📦 Gerar Build para Publicação (HostGator)

### Passo 1: Criar a Pasta "dist"

No Prompt de Comando (na pasta do projeto), digite:

```bash
npm run build
```

Isso criará uma pasta chamada **`dist`** dentro do seu projeto com todos os arquivos otimizados.

### Passo 2: Localizar a Pasta "dist"

1. Abra o Explorador de Arquivos
2. Vá até a pasta do projeto
3. Você verá uma nova pasta chamada **`dist`**
4. Dentro dela estarão todos os arquivos do site

---

## 🌐 Publicar no HostGator via cPanel

### Preparação dos Arquivos

1. Após executar `npm run build`, abra a pasta **`dist`**
2. Você verá arquivos como:
   - `index.html`
   - pasta `assets/` (com arquivos .js e .css)
   - Outras pastas e arquivos

### Passo a Passo no HostGator

#### 1. Acessar o cPanel
- Acesse: https://seu-dominio.com.br:2083
- OU: https://cpanel.hostgator.com.br
- Faça login com seu usuário e senha do HostGator

#### 2. Abrir o Gerenciador de Arquivos
- No cPanel, procure por **"Gerenciador de Arquivos"** ou **"File Manager"**
- Clique para abrir

#### 3. Navegar até a Pasta Pública
- Você verá várias pastas
- **IMPORTANTE**: Abra a pasta **`public_html`** (essa é a pasta pública do seu site)
- Se você tem um domínio principal, os arquivos vão em `public_html`
- Se é um subdomínio ou domínio adicional, pode ser outra pasta (ex: `public_html/subdominio`)

#### 4. Limpar Arquivos Antigos (Opcional)
- Se já existem arquivos na pasta, você pode deletá-los
- Selecione todos (menos `.htaccess` se existir)
- Clique em **"Delete"**

#### 5. Fazer Upload dos Arquivos

**Método 1 - Upload Direto:**
1. Clique em **"Upload"** no topo do Gerenciador de Arquivos
2. Clique em **"Selecionar Arquivo"** ou arraste os arquivos
3. **IMPORTANTE**: Selecione TODOS os arquivos e pastas de dentro da pasta `dist`:
   - `index.html`
   - Pasta `assets/`
   - Todos os outros arquivos
4. Aguarde o upload completar (pode demorar alguns minutos)
5. Clique em **"Voltar"** para retornar ao Gerenciador de Arquivos

**Método 2 - Upload via ZIP (Mais Rápido para muitos arquivos):**
1. No seu computador, DENTRO da pasta `dist`, selecione TODOS os arquivos
2. Clique com botão direito → **"Enviar para"** → **"Pasta compactada (zipada)"**
3. Você terá um arquivo `dist.zip` (ou outro nome)
4. No cPanel, faça upload desse arquivo .zip
5. Após o upload, clique com botão direito no arquivo .zip
6. Escolha **"Extract"** ou **"Extrair"**
7. Delete o arquivo .zip depois de extrair

#### 6. Configurar Permissões (Importante!)
1. Selecione o arquivo `index.html`
2. Clique com botão direito → **"Permissions"** ou **"Permissões"**
3. Configure para: **644** (leitura para todos)
4. Faça o mesmo para as pastas: **755**

#### 7. Criar arquivo .htaccess (Para React Router funcionar)

Se o seu site usa navegação por rotas (páginas diferentes), você precisa criar um arquivo `.htaccess`:

1. No Gerenciador de Arquivos (dentro de `public_html`), clique em **"+ File"** ou **"Novo Arquivo"**
2. Nome do arquivo: `.htaccess`
3. Clique com botão direito no arquivo → **"Edit"**
4. Cole este conteúdo:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# Configurações de Cache (Opcional - Melhora Performance)
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType application/x-javascript "access plus 1 month"
</IfModule>

# Compressão GZIP (Opcional - Melhora Performance)
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css application/javascript application/json
</IfModule>
```

5. Clique em **"Save Changes"**

#### 8. Testar o Site
- Abra seu navegador
- Acesse: **http://seu-dominio.com.br**
- O site deve estar funcionando! 🎉

---

## 🔧 Solução de Problemas no HostGator

### Problema 1: Página em Branco
**Causa:** Arquivos não foram enviados corretamente ou estão na pasta errada

**Solução:**
1. Verifique se o arquivo `index.html` está em `public_html` (não dentro de uma subpasta)
2. Verifique se a pasta `assets` também está lá
3. Tente limpar o cache do navegador (Ctrl + Shift + Delete)

### Problema 2: Erro 404 ao Navegar
**Causa:** Falta o arquivo `.htaccess`

**Solução:**
- Crie o arquivo `.htaccess` conforme instruções acima

### Problema 3: Erro 500 (Internal Server Error)
**Causa:** Erro no arquivo `.htaccess` ou permissões erradas

**Solução:**
1. Verifique as permissões dos arquivos (644 para arquivos, 755 para pastas)
2. Renomeie temporariamente o `.htaccess` para `.htaccess_old` para testar

### Problema 4: Imagens não Carregam
**Causa:** Caminhos errados ou arquivos não foram enviados

**Solução:**
1. Verifique se TODOS os arquivos da pasta `dist` foram enviados
2. Verifique se a pasta `assets` contém todas as imagens

### Problema 5: Site Lento
**Solução:**
- Adicione as configurações de cache e compressão no `.htaccess` (veja acima)
- Considere usar o Cloudflare (gratuito) como CDN

---

## 📝 Checklist Completo

### No Computador (Windows):
- [ ] Node.js instalado
- [ ] Projeto baixado do Figma Make
- [ ] `npm install` executado com sucesso
- [ ] `npm run build` executado
- [ ] Pasta `dist` criada com sucesso

### No HostGator (cPanel):
- [ ] Login no cPanel realizado
- [ ] Pasta `public_html` localizada
- [ ] Todos os arquivos da pasta `dist` enviados
- [ ] Arquivo `.htaccess` criado
- [ ] Permissões configuradas (644 para arquivos, 755 para pastas)
- [ ] Site testado no navegador

---

## 🆘 Ainda com Problemas?

### Se o `npm install` NÃO funcionar:
1. Anote a mensagem de erro COMPLETA que aparece
2. Tire um print da tela
3. Me envie o erro para eu te ajudar especificamente

### Se o Upload no HostGator não funcionar:
1. Verifique o espaço disponível na sua conta (cPanel → "Disk Usage")
2. Tente fazer upload de menos arquivos por vez
3. Use o método ZIP se tiver muitos arquivos

### Suporte HostGator:
- Chat: https://www.hostgator.com.br/
- Telefone: 0800 591 2600
- Eles podem te ajudar especificamente com o upload de arquivos

---

## 💡 Dica Extra: Usar FileZilla (FTP)

Se o upload pelo cPanel for lento ou problemático, use um cliente FTP:

1. Baixe o FileZilla: https://filezilla-project.org/
2. No cPanel do HostGator, procure por **"FTP Accounts"**
3. Anote as informações de FTP (servidor, usuário, senha)
4. No FileZilla, conecte usando essas informações
5. Navegue até `public_html`
6. Arraste os arquivos da pasta `dist` para lá

---

**Desenvolvido para o Grupo Espírita Sementes de Humildade**  
*Acolhimento, simplicidade e espiritualidade* 🌱
