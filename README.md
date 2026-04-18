# 🎬 T-Movies — Architect Design System

> Aplicação web minimalista para gerenciamento de filmes, permitindo ao usuário organizar, acompanhar e analisar sua biblioteca pessoal através de uma interface limpa e focada em dados.

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-443E38?style=for-the-badge&logo=react&logoColor=white)

---

## 🌐 Live Preview

A aplicação está hospedada e disponível para testes na Vercel:  
👉 **[Acessar T-Movies (GDev Frontend Test)](https://gdev-frontend-test.vercel.app/)**

---

## 🚀 Principais Funcionalidades

- **🔐 Autenticação Simulada:** Sistema de Login e Registro com validação de credenciais e rotas protegidas (persistido em `localStorage`).
- **🎬 Gestão de Catálogo (CRUD):** Adicione, edite e remova filmes da sua biblioteca com facilidade.
- **🔍 Filtros e Paginação Inteligente:** Busca em tempo real por título, segmentação por "Era" (Ex: Anos 2020, Clássicos) e paginação calculada no cliente.
- **📊 Dashboard Analítico:** - Métricas gerais (Total de filmes, Taxa de conclusão).
  - **Timeline Chart:** Histograma dinâmico mostrando o volume temporal de filmes assistidos (visões Mensal/Anual).
  - **Gráficos de Composição:** Distribuição por gênero (Pie Chart) e status de visualização (Doughnut Chart).

---

## 🧱 Arquitetura: Atomic Design

O projeto foi rigorosamente estruturado seguindo a metodologia **Atomic Design**, garantindo altíssima escalabilidade, reaproveitamento de código e manutenção simplificada. A interface foi dividida em:

- **Atoms:** Componentes indivisíveis (Botões, Inputs).
- **Molecules:** Agrupamentos simples (Cards de informação, Barras de Filtro).
- **Organisms:** Seções complexas com contexto (NavBars, Formulários, Gráficos, Grids de Filmes).
- **Templates:** Esqueletos de layout puramente estruturais (MainLayout, FormLayout).
- **Pages:** Onde os dados e os templates se encontram para formar a rota final.

---

## 🛠️ Tecnologias Utilizadas

- **Core:** Next.js (App Router) & React
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS (Arquitetura visual baseada no design system "Architect")
- **Gerenciamento de Estado:** Zustand (com middleware de persistência)
- **Data Visualization:** Recharts

---

## ▶️ Como Executar o Projeto Localmente

Siga as instruções abaixo para rodar a aplicação em seu ambiente de desenvolvimento:

1. Clone o repositório:
```bash
git clone https://github.com/KaioSimeao/gdev-frontend-test.git
```

2. Acesse a pasta do projeto:
```bash
cd nome-do-repositorio
```

3. Instale as dependências:
```bash
npm install
```

4. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

5. Acesse no seu navegador: **`http://localhost:3000`**

---

## 🎯 Conceitos Aplicados

- Componentização inteligente (Smart vs Dumb Components).
- Persistência de estado global no *Client-Side*.
- Sanitização de formulários e *Error Handling*.
- UX focada em simplicidade funcional (Structure follows function).

---

## 📌 Melhorias Futuras

- [ ] Integração com Back-end real (Supabase/Firebase) para persistência em nuvem.
- [ ] Implementação de upload de imagens (Posters) via AWS S3 ou Cloudinary.
- [ ] Cobertura de testes automatizados (Jest e Cypress).
- [ ] Sistema de recomendações de filmes baseado no gênero predominante do usuário.

---

## 👨‍💻 Autor

Desenvolvido por **Kaio Simeão**.