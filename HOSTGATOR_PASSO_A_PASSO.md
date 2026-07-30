# 🌐 HostGator cPanel - Passo a Passo Completo

## 📦 ANTES DE COMEÇAR

Você precisa ter em mãos:
- ✅ Login e senha do cPanel (enviados por email quando você contratou)
- ✅ Arquivos do site prontos para upload

---

## PASSO 1: PREPARAR OS ARQUIVOS DO SITE

### Se você ainda NÃO tem os arquivos prontos:

O Figma Make gera o site, mas você precisa **baixar/copiar** os arquivos. Como o Figma Make não tem um botão direto de download, você tem 2 opções:

#### OPÇÃO A: Copiar Arquivos Manualmente do Figma Make

Você vai precisar criar esta estrutura de pastas no seu computador (pode ser em `C:\Sites\sementes-humildade\`):

**Arquivos OBRIGATÓRIOS para copiar:**

```
📁 Criar uma pasta (ex: sementes-humildade)
│
├── 📄 package.json
├── 📄 vite.config.ts  
├── 📄 postcss.config.mjs
├── 📄 index.html (criar com o conteúdo abaixo se não existir)
│
├── 📁 src/
│   ├── 📁 app/
│   │   ├── 📄 App.tsx
│   │   └── 📁 components/
│   │       ├── 📄 Header.tsx
│   │       ├── 📄 Button.tsx
│   │       ├── 📄 Card.tsx
│   │       ├── 📄 Section.tsx
│   │       └── 📁 ui/ (todos os arquivos desta pasta)
│   │
│   └── 📁 styles/
│       ├── 📄 index.css
│       ├── 📄 tailwind.css
│       ├── 📄 theme.css
│       └── 📄 fonts.css
```

**Para cada arquivo:**
1. No Figma Make, clique no arquivo
2. Selecione todo o conteúdo (Ctrl+A)
3. Copie (Ctrl+C)
4. No seu computador, crie o arquivo com o mesmo nome
5. Abra com Bloco de Notas
6. Cole o conteúdo (Ctrl+V)
7. Salve (Ctrl+S)

#### OPÇÃO B: Usar os Arquivos Estáticos Direto (SEM Node.js) ⭐ MAIS SIMPLES

Se você não quer lidar com Node.js e npm, pode criar uma versão HTML/CSS/JS simples:

**Vou criar os arquivos estáticos para você logo abaixo!**

---

## PASSO 2: ACESSAR O cPANEL DO HOSTGATOR

### 2.1 - Encontrar o Link de Acesso

O HostGator oferece 3 formas de acessar o cPanel:

**Forma 1 (Mais Comum):**
```
https://seudominio.com.br:2083
```
Substitua `seudominio.com.br` pelo SEU domínio.

**Forma 2:**
```
https://cpanel.hostgator.com.br
```

**Forma 3:**
- Acesse: https://financeiro.hostgator.com.br
- Faça login com seu email e senha
- Clique em "Serviços" → "Meus Serviços"
- Clique no domínio
- Clique em "Login no cPanel"

### 2.2 - Fazer Login

1. Você verá uma tela de login
2. **Usuário:** Geralmente é seu email OU o username (veio no email de boas-vindas)
3. **Senha:** A senha que você criou na contratação
4. Clique em **"Entrar"** ou **"Login"**

> 💡 **Não lembra a senha?** Clique em "Esqueci minha senha" ou entre em contato com suporte HostGator: 0800 591 2600

### 2.3 - Tela Inicial do cPanel

Você verá uma tela cheia de ícones. Não se assuste! Vamos usar apenas 1 ferramenta: **Gerenciador de Arquivos**

---

## PASSO 3: ACESSAR O GERENCIADOR DE ARQUIVOS

### 3.1 - Localizar o Gerenciador

1. Na tela inicial do cPanel, role a página para baixo
2. Procure a seção **"Arquivos"** ou **"Files"**
3. Clique no ícone **"Gerenciador de Arquivos"** ou **"File Manager"**

![Ícone parecido com uma pasta azul]

### 3.2 - Entender a Estrutura de Pastas

Você verá várias pastas:
- **public_html** ⭐ ESTA É A PASTA PÚBLICA DO SEU SITE
- mail/
- tmp/
- www/ (link para public_html)
- etc/
- .htpasswds/

**IMPORTANTE:** Seus arquivos devem ir DENTRO da pasta **`public_html`**

### 3.3 - Abrir a Pasta public_html

1. **Duplo clique** na pasta `public_html`
2. Você verá o conteúdo atual (pode estar vazio ou ter arquivos antigos)

---

## PASSO 4: LIMPAR ARQUIVOS ANTIGOS (Se houver)

### 4.1 - Verificar se há arquivos

Se dentro de `public_html` você ver arquivos como:
- `index.html`
- `index.php`
- Pastas antigas

### 4.2 - Deletar arquivos antigos

⚠️ **CUIDADO:** NÃO delete arquivos chamados:
- `.htaccess` (se houver, deixe ele)
- `cgi-bin/` (pasta do sistema)

**Para deletar os outros:**
1. Selecione os arquivos clicando neles (Ctrl + clique para selecionar vários)
2. Clique no botão **"Delete"** ou **"Excluir"** no topo
3. Confirme clicando em **"Delete Files"** ou **"Confirmar"**

---

## PASSO 5: FAZER UPLOAD DOS ARQUIVOS DO SITE

### 5.1 - Preparar os Arquivos

Primeiro, você precisa ter os arquivos do site prontos. Existem 2 cenários:

#### CENÁRIO A: Você tem a pasta "dist" (se usou npm build)

Se você executou `npm run build` no seu computador, você tem uma pasta chamada `dist` com arquivos assim:

```
dist/
├── index.html
├── assets/
│   ├── index-abc123.js
│   ├── index-xyz789.css
│   └── (outras imagens e arquivos)
└── (outros arquivos)
```

#### CENÁRIO B: Upload Direto (mais simples para plano mínimo)

Vou criar os arquivos HTML/CSS/JS estáticos para você logo abaixo!

### 5.2 - Método de Upload (ZIP) ⭐ RECOMENDADO

Este é o método MAIS RÁPIDO e fácil:

**NO SEU COMPUTADOR:**

1. Abra a pasta `dist` (ou a pasta com seus arquivos)
2. Entre DENTRO da pasta
3. Selecione **TODOS** os arquivos e pastas (Ctrl+A)
4. Clique com botão direito → **"Enviar para"** → **"Pasta compactada (zipada)"**
5. Um arquivo `.zip` será criado (ex: `site.zip`)

**NO cPANEL:**

1. Certifique-se que está DENTRO da pasta `public_html`
2. Clique no botão **"Upload"** (no topo da página)
3. Uma nova aba/janela abrirá
4. Clique em **"Selecionar Arquivo"** ou arraste o arquivo `.zip`
5. Aguarde o upload completar (barra de progresso verde = 100%)
6. Feche a aba de upload
7. Volte para o Gerenciador de Arquivos
8. Você verá o arquivo `.zip` listado
9. Clique com **botão direito** no arquivo `.zip`
10. Escolha **"Extract"** ou **"Extrair"**
11. Clique em **"Extract Files"** ou **"Extrair Arquivos"**
12. Aguarde a mensagem de sucesso
13. Feche a janela
14. **Delete o arquivo .zip** (botão direito → Delete)

### 5.3 - Método de Upload (Arquivo por Arquivo)

Se o método ZIP não funcionar:

1. No Gerenciador de Arquivos (dentro de `public_html`), clique em **"Upload"**
2. Na tela de upload, clique em **"Selecionar Arquivo"**
3. Navegue até sua pasta `dist`
4. Selecione o arquivo `index.html`
5. Aguarde o upload
6. Repita para TODOS os arquivos e pastas

**Para fazer upload de pastas:**
- Você precisa fazer upload dos arquivos dentro delas
- OU comprimir a pasta em .zip e usar o método acima

---

## PASSO 6: VERIFICAR SE OS ARQUIVOS ESTÃO CORRETOS

### 6.1 - Estrutura Esperada em public_html

Após o upload, dentro de `public_html` você deve ver:

```
public_html/
├── index.html          ← OBRIGATÓRIO
├── assets/             ← Pasta com JS, CSS, imagens
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── (outras imagens)
└── (outros arquivos se houver)
```

### 6.2 - Verificar o arquivo index.html

1. No Gerenciador de Arquivos, localize `index.html`
2. Clique com **botão direito** → **"View"** ou **"Visualizar"**
3. Deve aparecer código HTML (não deve estar vazio)

---

## PASSO 7: CRIAR ARQUIVO .htaccess (IMPORTANTE!)

Este arquivo faz o site funcionar corretamente, especialmente se você navegar entre páginas.

### 7.1 - Criar o arquivo

1. No Gerenciador de Arquivos (dentro de `public_html`), clique em **"+ File"** ou **"Novo Arquivo"**
2. Digite o nome: `.htaccess` (com o ponto na frente!)
3. Clique em **"Create New File"** ou **"Criar"**

### 7.2 - Editar o arquivo

1. Localize o arquivo `.htaccess` que você acabou de criar
2. Clique com **botão direito** → **"Edit"** ou **"Editar"**
3. Uma janela de codificação pode aparecer, clique **"Edit"** novamente
4. Um editor de texto abrirá
5. **Cole este conteúdo:**

```apache
# Habilitar Rewrite Engine
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  
  # Não reescrever arquivos existentes
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  
  # Redirecionar tudo para index.html
  RewriteRule . /index.html [L]
</IfModule>

# Configurações de segurança
<FilesMatch "\.(htaccess|htpasswd|ini|log|sh|sql)$">
  Order Allow,Deny
  Deny from all
</FilesMatch>

# Configurar página de erro 404
ErrorDocument 404 /index.html

# Habilitar compressão GZIP (melhora velocidade)
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css application/javascript application/json
</IfModule>

# Cache para melhorar performance
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>

# Forçar HTTPS (descomente as linhas abaixo depois de instalar SSL)
# RewriteCond %{HTTPS} off
# RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

6. Clique em **"Save Changes"** ou **"Salvar Alterações"** (canto superior direito)
7. Feche o editor

---

## PASSO 8: CONFIGURAR PERMISSÕES DOS ARQUIVOS

### 8.1 - Por que isso é importante?

Permissões erradas podem causar:
- ❌ Erro 403 (Forbidden)
- ❌ Erro 500 (Internal Server Error)
- ❌ Arquivos não carregam

### 8.2 - Configurar permissões do index.html

1. No Gerenciador de Arquivos, localize `index.html`
2. Clique com **botão direito** → **"Permissions"** ou **"Permissões"**
3. Uma janela abrirá com checkboxes
4. Configure assim:
   - ☑ Owner: Read, Write
   - ☑ Group: Read
   - ☑ World: Read
5. O número deve mostrar: **644**
6. Clique em **"Change Permissions"** ou **"Alterar Permissões"**

### 8.3 - Configurar permissões da pasta assets

1. Localize a pasta `assets`
2. Clique com **botão direito** → **"Permissions"**
3. Configure assim:
   - ☑ Owner: Read, Write, Execute
   - ☑ Group: Read, Execute
   - ☑ World: Read, Execute
4. O número deve mostrar: **755**
5. ✅ Marque a opção **"Recurse into subdirectories"** (aplicar em subpastas)
6. Clique em **"Change Permissions"**

---

## PASSO 9: TESTAR O SITE

### 9.1 - Acessar o site

1. Abra uma **nova aba** no navegador
2. Digite: `http://seudominio.com.br` (substitua pelo seu domínio real)
3. Pressione **Enter**

### 9.2 - O que você deve ver?

✅ **Se deu certo:** Você verá o site do Grupo Espírita Sementes de Humildade carregado!

❌ **Se deu errado:** Veja a seção de Problemas Comuns abaixo.

### 9.3 - Testar navegação

1. Clique nos links do menu (Nossas Reuniões, Cursos & Eventos, etc)
2. Tudo deve funcionar normalmente
3. Teste no celular também!

---

## PASSO 10: INSTALAR CERTIFICADO SSL (HTTPS) - GRÁTIS!

O HostGator oferece SSL gratuito. Isso deixa seu site com **https://** (mais seguro).

### 10.1 - Ativar SSL Gratuito

1. Volte para a **tela inicial do cPanel**
2. Procure a seção **"Segurança"** ou **"Security"**
3. Clique em **"SSL/TLS Status"** ou **"Let's Encrypt SSL"**
4. Localize seu domínio na lista
5. Clique em **"Run AutoSSL"** ou **"Ativar SSL"**
6. Aguarde (pode levar de 5 minutos a 2 horas)

### 10.2 - Forçar HTTPS (Depois que SSL estiver ativo)

1. Abra o arquivo `.htaccess` novamente
2. Localize estas linhas no final:
   ```
   # RewriteCond %{HTTPS} off
   # RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
   ```
3. Remova o `#` da frente (descomente):
   ```
   RewriteCond %{HTTPS} off
   RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
   ```
4. Salve o arquivo

Agora seu site sempre usará HTTPS! 🔒

---

## ❌ PROBLEMAS COMUNS E SOLUÇÕES

### PROBLEMA 1: Página em Branco

**Causa:** Arquivos não foram enviados corretamente

**Solução:**
1. Verifique se `index.html` está em `public_html` (não dentro de subpasta!)
2. Verifique se a pasta `assets` também está lá
3. Abra o `index.html` e veja se tem conteúdo
4. Limpe o cache do navegador: Ctrl + Shift + Delete

### PROBLEMA 2: Erro 404 - Not Found

**Causa:** Arquivo index.html não encontrado

**Solução:**
1. No cPanel, vá em Gerenciador de Arquivos
2. Entre em `public_html`
3. Certifique-se que existe um arquivo chamado **exatamente** `index.html` (não `Index.html` ou outro nome)

### PROBLEMA 3: Erro 403 - Forbidden

**Causa:** Permissões incorretas

**Solução:**
1. Selecione `index.html`
2. Botão direito → Permissions → Configure para **644**
3. Selecione todas as pastas
4. Botão direito → Permissions → Configure para **755**

### PROBLEMA 4: Erro 500 - Internal Server Error

**Causa:** Erro no arquivo `.htaccess`

**Solução:**
1. Renomeie o `.htaccess` para `.htaccess_old` (temporariamente)
2. Teste o site
3. Se funcionar, o problema está no `.htaccess`
4. Recrie o arquivo com cuidado, copiando exatamente o código do PASSO 7

### PROBLEMA 5: CSS e JS não carregam (site sem estilo)

**Causa:** Caminhos errados ou arquivos faltando

**Solução:**
1. Abra o site
2. Pressione F12 (abre Ferramentas do Desenvolvedor)
3. Vá na aba "Console"
4. Veja quais arquivos estão dando erro 404
5. Verifique se esses arquivos existem na pasta `assets` no cPanel
6. Se não existirem, faça upload novamente

### PROBLEMA 6: Imagens não aparecem

**Causa:** Arquivos de imagem não foram enviados

**Solução:**
1. Verifique se dentro de `assets/` existem arquivos `.png`, `.jpg`, `.svg`, etc
2. Se não, faça upload das imagens novamente
3. Verifique permissões: **644** para imagens

### PROBLEMA 7: Site funciona em seudominio.com.br mas não em www.seudominio.com.br

**Causa:** Redirecionamento não configurado

**Solução:**
Adicione isto no início do `.htaccess`:
```apache
# Redirecionar www para não-www (ou vice-versa)
RewriteCond %{HTTP_HOST} ^www\.(.*)$ [NC]
RewriteRule ^(.*)$ http://%1/$1 [R=301,L]
```

---

## 📊 VERIFICAR USO DE ESPAÇO (Plano Mínimo)

O plano mínimo do HostGator tem limite de espaço. Para verificar:

1. Na tela inicial do cPanel
2. Lado esquerdo, procure **"Estatísticas"** ou **"Statistics"**
3. Veja **"Disk Usage"** ou **"Uso de Disco"**
4. Se estiver perto do limite, delete arquivos desnecessários

**Dica:** Otimize imagens antes de fazer upload para economizar espaço!

---

## 🔄 ATUALIZAR O SITE NO FUTURO

Quando você fizer mudanças no código:

1. Execute `npm run build` novamente (se usar npm)
2. No cPanel, vá em `public_html`
3. **Delete** todos os arquivos antigos (exceto `.htaccess`)
4. Faça upload dos novos arquivos da pasta `dist`
5. Pronto!

**Ou use FTP** para atualizações mais rápidas (FileZilla).

---

## 📞 SUPORTE HOSTGATOR

Se nada funcionar, entre em contato:

- ☎️ **Telefone:** 0800 591 2600
- 💬 **Chat:** https://www.hostgator.com.br/suporte
- ⏰ **Horário:** 24 horas, 7 dias por semana

Diga que você precisa de ajuda para fazer upload de um site HTML/CSS/JS.

---

## ✅ CHECKLIST FINAL

- [ ] cPanel acessado com sucesso
- [ ] Gerenciador de Arquivos aberto
- [ ] Pasta `public_html` localizada
- [ ] Arquivos do site enviados
- [ ] Arquivo `index.html` está em `public_html`
- [ ] Pasta `assets` está em `public_html`
- [ ] Arquivo `.htaccess` criado e configurado
- [ ] Permissões configuradas (644 para arquivos, 755 para pastas)
- [ ] Site testado no navegador
- [ ] Site funciona corretamente! 🎉
- [ ] SSL ativado (opcional mas recomendado)

---

**Desenvolvido para o Grupo Espírita Sementes de Humildade**  
📍 Rua Goiás, 253 - Nova Aldeinha, Barueri - SP, CEP 06440-170  
🌱 *Acolhimento, simplicidade e espiritualidade*
