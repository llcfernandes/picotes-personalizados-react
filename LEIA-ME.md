# 🎀 Picotes Personalizados — Site Oficial

Site profissional, responsivo e de fácil manutenção para papelaria personalizada.
Paleta rosa, dark mode, galeria de produtos e pedidos direto pelo WhatsApp.

---

## 📋 PRÉ-REQUISITOS (instale antes de tudo)

Você precisará de:

| Ferramenta | Versão mínima | Download |
|------------|---------------|---------|
| **Node.js** | 18 ou superior | https://nodejs.org (baixe a versão LTS) |
| **npm** | já vem com o Node | — |

Para confirmar que está instalado corretamente, abra o terminal e rode:
```bash
node -v    # deve aparecer: v18.x.x ou superior
npm -v     # deve aparecer: 9.x.x ou superior
```

---

## 🚀 COMO RODAR NO SEU PC (passo a passo)

### 1. Extraia o ZIP
Extraia a pasta `picotes-personalizados` em qualquer lugar do seu computador.

### 2. Abra o terminal na pasta do projeto
- **Windows:** clique com o botão direito dentro da pasta → "Abrir no Terminal"
- **Mac:** clique com direito → "Nova Aba do Terminal na Pasta"

### 3. Instale as dependências
```bash
npm install
```
> Isso baixa todas as bibliotecas necessárias. Aguarde terminar (pode demorar 1-2 min).

### 4. Rode o projeto
```bash
npm run dev
```

### 5. Abra no navegador
Acesse: **http://localhost:5173**

O site estará funcionando no seu computador! 🎉

---

## 🗂 ESTRUTURA DE PASTAS

```
picotes-personalizados/
├── index.html               ← HTML base (raramente precisa editar)
├── vite.config.js           ← Config do Vite (não mexa)
├── package.json             ← Dependências do projeto
│
└── src/
    ├── main.jsx             ← Entrada da aplicação (não mexa)
    ├── App.jsx              ← Orquestra temas e layout geral
    │
    ├── theme/
    │   ├── lightTheme.js    ← 🎨 Cores do modo CLARO
    │   └── darkTheme.js     ← 🎨 Cores do modo ESCURO
    │
    ├── data/
    │   └── products.js      ← 📦 PRODUTOS + WhatsApp (edite aqui!)
    │
    ├── hooks/
    │   ├── useThemeMode.js  ← Lógica de tema (localStorage)
    │   └── useScrollSpy.js  ← Destaque do link ativo no navbar
    │
    ├── utils/
    │   ├── whatsapp.js      ← Gera link do WhatsApp
    │   └── scroll.js        ← Scroll suave para seções
    │
    ├── styles/
    │   └── GlobalStyle.js   ← Reset CSS global
    │
    └── components/
        ├── Header.jsx        ← Navbar (desktop + mobile + hambúrguer)
        ├── ThemeToggle.jsx   ← Botão 🌙/☀️
        ├── Hero.jsx          ← Seção principal (topo da página)
        ├── Products.jsx      ← Grid de categorias de produtos
        ├── ProductCard.jsx   ← Card individual de produto
        ├── HowItWorks.jsx    ← Seção "Como Funciona"
        ├── Gallery.jsx       ← Seção de depoimentos
        ├── GalleryPage.jsx   ← Página overlay com fotos dos produtos
        ├── Footer.jsx        ← Rodapé
        └── WhatsAppButton.jsx← Botão flutuante verde
```

---

## ✏️ COMO FAZER MANUTENÇÃO

### 📱 Mudar o número do WhatsApp
Abra `src/data/products.js` e edite:
```js
export const WHATSAPP_NUMBER = '5521998011249'
//                              ↑ só números: DDI + DDD + número
```

### ➕ Adicionar novo produto
No arquivo `src/data/products.js`, adicione um novo objeto ao array `products`:
```js
{
  id: 'meu-produto',           // identificador único (sem espaços)
  emoji: '🎁',
  title: 'Meu Novo Produto',
  description: 'Descrição do produto aqui.',
  tags: ['Tag1', 'Tag2'],
  whatsappMessage: 'Olá! Quero um orçamento para Meu Novo Produto 🎁',
  photos: [
    { name: 'Variação 1', subtitle: 'Subtítulo', emoji: '🎁', colorIndex: 1 },
    // colorIndex vai de 1 a 6 (muda o tom de rosa do card)
  ],
},
```

### 🖼️ Adicionar fotos reais dos produtos
Em `src/components/GalleryPage.jsx`, localize `<PhotoThumb>` e substitua o emoji por uma tag `<img>`:
```jsx
// Antes (com emoji placeholder):
<PhotoThumb $bg={getBackground(photo.colorIndex)}>
  {photo.emoji}
</PhotoThumb>

// Depois (com foto real):
<PhotoThumb>
  <img src={photo.imageUrl} alt={photo.name} style={{ width:'100%', height:'100%', objectFit:'cover' }} />
</PhotoThumb>
```
E adicione `imageUrl` em cada foto no `products.js`:
```js
{ name: 'Topo Princesa', imageUrl: '/fotos/topo-princesa.jpg', ... }
```
Coloque as imagens na pasta `public/fotos/`.

### 🎨 Mudar cores
- **Modo claro:** edite `src/theme/lightTheme.js`
- **Modo escuro:** edite `src/theme/darkTheme.js`

As variáveis mais usadas:

| Variável       | Função                          |
|----------------|---------------------------------|
| `primary`      | Cor principal (rosa médio)      |
| `primaryDark`  | Rosa escuro (botões, footer)    |
| `primaryLight` | Rosa clarinho (fundos suaves)   |
| `accent`       | Rosa bordas e destaques         |
| `background`   | Fundo da página                 |
| `surface`      | Fundo de cards e header         |

### 💬 Mudar depoimentos
Edite o array `TESTIMONIALS` em `src/data/products.js`.

### 🔄 Mudar passos "Como Funciona"
Edite o array `HOW_IT_WORKS` em `src/data/products.js`.

---

## 🏗️ GERAR VERSÃO DE PRODUÇÃO

Para gerar os arquivos finais para publicação:
```bash
npm run build
```
Os arquivos estarão na pasta `dist/`. É ela que você sobe para o servidor.

Para pré-visualizar a versão de produção localmente:
```bash
npm run preview
```

---

## 🌐 COMO PUBLICAR ONLINE (Vercel — grátis)

### Opção A: via GitHub (recomendado)
1. Crie uma conta em https://github.com e suba o projeto
2. Acesse https://vercel.com e faça login com o GitHub
3. Clique em **"Add New Project"** → selecione o repositório
4. A Vercel detecta o Vite automaticamente → clique **Deploy**
5. ✅ Site no ar com HTTPS em menos de 2 minutos!

### Opção B: via linha de comando
```bash
npm install -g vercel
vercel
```
Siga as instruções no terminal. O link do site aparece no final.

### Outras opções de hospedagem gratuita:
- **Netlify:** https://netlify.com (arraste a pasta `dist/` direto no site)
- **GitHub Pages:** gratuito para repositórios públicos

---

## ❓ PROBLEMAS COMUNS

**"npm não é reconhecido como comando"**
→ Reinstale o Node.js em https://nodejs.org e reinicie o terminal.

**"Porta 5173 já em uso"**
→ O Vite escolherá outra porta automaticamente. Verifique o terminal.

**Fontes não carregam**
→ Você precisa de internet para carregar as fontes do Google Fonts.

**Mudei algo e não apareceu**
→ O Vite tem hot-reload automático. Se não atualizar, salve o arquivo novamente (Ctrl+S).

---

## 📞 SUPORTE

Dúvidas? Entre em contato pelo WhatsApp antes de revender. 😊
