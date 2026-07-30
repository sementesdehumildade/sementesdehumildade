# 🔨 Como Gerar a Pasta "dist" no Windows

## ✅ Pré-requisito: Instalar Node.js

### Passo 1: Baixar Node.js

1. Acesse: **https://nodejs.org/pt-br**
2. Clique no botão verde grande: **"Baixar Node.js (LTS)"**
3. Aguarde o download (arquivo `.msi`, cerca de 30-40 MB)

### Passo 2: Instalar Node.js

1. Localize o arquivo baixado (geralmente na pasta "Downloads")
2. **Duplo clique** no arquivo `.msi`
3. Clique em **"Next"** (Próximo)
4. Aceite os termos → **"Next"**
5. Deixe a pasta padrão → **"Next"**
6. **IMPORTANTE:** Na tela de "Tools for Native Modules", se aparecer a opção **"Automatically install the necessary tools"**, deixe marcado
7. Clique em **"Next"**
8. Clique em **"Install"** (Instalar)
9. Aguarde a instalação (2-3 minutos)
10. Clique em **"Finish"**

### Passo 3: ⚠️ REINICIAR O COMPUTADOR

**OBRIGATÓRIO:** Reinicie o computador agora para o Node.js funcionar corretamente.

### Passo 4: Verificar se Instalou

Após reiniciar:

1. Pressione **Win + R**
2. Digite: `cmd`
3. Pressione **Enter**
4. No Prompt de Comando, digite:
   ```
   node --version
   ```
5. Pressione **Enter**
6. Deve aparecer algo como: `v20.11.0` ou similar ✅

7. Digite também:
   ```
   npm --version
   ```
8. Deve aparecer algo como: `10.2.4` ou similar ✅

**✅ Se apareceu as versões, o Node.js está instalado corretamente!**

**❌ Se apareceu "'node' não é reconhecido":**
- Reinicie o computador novamente
- Se ainda não funcionar, desinstale e instale novamente

---

## 📦 Gerar a Pasta "dist"

Agora que o Node.js está instalado, vamos gerar a pasta `dist`:

### Passo 1: Abrir o Prompt de Comando na Pasta do Projeto

**Método Fácil:**

1. Abra o **Explorador de Arquivos** (Win + E)
2. Navegue até a pasta onde você **descompactou** os arquivos do GitHub
   - Exemplo: `C:\Users\SeuNome\Downloads\sementes-humildade-main`
3. Você deve ver arquivos como: `package.json`, `vite.config.ts`, pasta `src/`, etc
4. Clique na **barra de endereço** (onde mostra o caminho da pasta)
5. Digite: `cmd`
6. Pressione **Enter**
7. Uma janela preta (Prompt de Comando) abrirá **já na pasta correta** ✅

**Método Alternativo:**

1. Pressione **Win + R**
2. Digite: `cmd`
3. Pressione **Enter**
4. Digite (substituindo pelo caminho da sua pasta):
   ```
   cd C:\Users\SeuNome\Downloads\sementes-humildade-main
   ```
5. Pressione **Enter**

### Passo 2: Instalar as Dependências

No Prompt de Comando que você acabou de abrir, digite:

```bash
npm install
```

Pressione **Enter**.

**O que vai acontecer:**
- O npm vai baixar TODAS as bibliotecas necessárias (React, Vite, etc)
- ⏳ **Pode demorar de 2 a 10 minutos** (depende da sua internet)
- Você verá várias mensagens passando na tela
- Uma barra de progresso pode aparecer
- Quando terminar, você verá o prompt de comando novamente

**⚠️ Possíveis Erros:**

**Erro: "npm não é reconhecido"**
→ O Node.js não foi instalado. Volte ao Passo 1.

**Erro: "EACCES" ou "permission denied"**
→ Feche o CMD e abra como Administrador:
   - Clique no Iniciar
   - Digite: `cmd`
   - Clique com botão direito em "Prompt de Comando"
   - Escolha "Executar como Administrador"
   - Navegue até a pasta do projeto novamente
   - Execute `npm install`

**Erro de rede ou timeout:**
→ Verifique sua conexão com internet
→ Desative temporariamente o antivírus
→ Tente novamente

### Passo 3: Gerar o Build (Criar a pasta "dist")

Quando o `npm install` terminar (sem erros), digite:

```bash
npm run build
```

Pressione **Enter**.

**O que vai acontecer:**
- O Vite vai **compilar** todo o código React
- Vai criar uma pasta chamada **`dist`**
- ⏳ **Leva de 30 segundos a 2 minutos**
- Quando terminar, você verá uma mensagem de sucesso em verde
- Algo como: `✓ built in 1.23s`

### Passo 4: Localizar a Pasta "dist"

1. Vá para a pasta do projeto no Explorador de Arquivos
2. Você verá uma **NOVA pasta** chamada **`dist`**
3. Abra essa pasta
4. Dentro dela você verá:
   - `index.html`
   - Pasta `assets/` (com arquivos `.js` e `.css`)
   - Outros arquivos

**✅ PRONTO! Esta é a pasta que você vai enviar para o HostGator!**

---

## 📤 Próximos Passos: Upload para HostGator

Agora que você tem a pasta `dist`, siga o guia **HOSTGATOR_PASSO_A_PASSO.md**:

1. Entre na pasta `dist`
2. Selecione **TODOS** os arquivos de dentro dela (Ctrl+A)
3. Botão direito → "Enviar para" → "Pasta compactada"
4. Será criado um arquivo `.zip`
5. Faça upload desse `.zip` para o cPanel
6. Extraia no `public_html`
7. Pronto! 🎉

---

## 🔄 Fazer Alterações Futuras

Quando você quiser atualizar o site:

1. Faça as mudanças nos arquivos da pasta `src/`
2. Abra o Prompt de Comando na pasta do projeto
3. Execute: `npm run build`
4. A pasta `dist` será recriada com as novas alterações
5. Faça upload dos novos arquivos para o HostGator

---

## ❓ Perguntas Frequentes

**P: Preciso fazer isso toda vez?**
R: Não! Você só precisa instalar Node.js UMA VEZ. Depois, para atualizar o site, só precisa executar `npm run build` novamente.

**P: Posso deletar a pasta node_modules depois?**
R: Pode, mas se for atualizar o site, vai precisar executar `npm install` de novo. Melhor deixar lá.

**P: A pasta dist some quando reinicio o computador?**
R: Não! Ela fica salva. Só é recriada quando você executar `npm run build` novamente.

**P: Posso usar o npm no meu computador para sempre?**
R: Sim! Uma vez instalado o Node.js, você pode usar para outros projetos também.

**P: Quanto tempo demora tudo isso?**
R: Instalação do Node.js: 5 minutos | npm install: 2-10 minutos | npm run build: 30s-2min
**Total: ~15-20 minutos na primeira vez**

---

## 💾 Estrutura Completa

Antes do build:
```
sementes-humildade-main/
├── src/               ← Código-fonte (React, TypeScript)
├── package.json       ← Lista de dependências
├── vite.config.ts     ← Configuração do Vite
└── ...
```

Depois do `npm install`:
```
sementes-humildade-main/
├── src/
├── node_modules/      ← ⚠️ NOVA PASTA (não mexer!)
├── package.json
└── ...
```

Depois do `npm run build`:
```
sementes-humildade-main/
├── src/
├── node_modules/
├── dist/              ← ⭐ PASTA PRONTA PARA HOSTGATOR!
│   ├── index.html
│   └── assets/
├── package.json
└── ...
```

---

## ✅ Checklist Rápido

- [ ] Node.js baixado de nodejs.org
- [ ] Node.js instalado
- [ ] Computador reiniciado
- [ ] `node --version` funciona no CMD
- [ ] `npm --version` funciona no CMD
- [ ] Abri CMD na pasta do projeto
- [ ] Executei `npm install` (aguardei terminar)
- [ ] Executei `npm run build` (aguardei terminar)
- [ ] Pasta `dist` foi criada
- [ ] Vejo `index.html` dentro de `dist`
- [ ] Pronto para fazer upload no HostGator! 🎉

---

**Grupo Espírita Sementes de Humildade**  
🌱 *Acolhimento, simplicidade e espiritualidade*
