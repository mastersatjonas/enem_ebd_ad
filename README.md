# 📖 ENEM Bíblico EBD 2025

Sistema de avaliação online para Escola Bíblica Dominical com geração automática de certificados.

![Versão](https://img.shields.io/badge/versão-1.0.0-blue)
![Status](https://img.shields.io/badge/status-ativo-success)
![Licença](https://img.shields.io/badge/licença-MIT-green)

---

## 📋 Sobre o Projeto

Sistema web desenvolvido para a **Igreja Assembleia de Deus - Missão Augustinópolis/TO** que permite:

- Aplicação de avaliações bíblicas online
- Correção automática com gabarito detalhado
- Geração de certificados em PDF
- Acompanhamento de desempenho por aluno
- Interface responsiva (funciona em celular, tablet e desktop)

**Atualmente configurado para:**
- **Revista:** Jovens - 1º Trimestre 2025
- **Lição 1:** O Sentido Bíblico da Salvação
- **Total:** 10 questões

---

## ✨ Funcionalidades

### 🎯 **Sistema de Avaliação**
- ✅ 10 questões de múltipla escolha (A, B, C, D)
- ✅ Navegação entre questões (anterior/próxima)
- ✅ Marcação visual de resposta selecionada
- ✅ Contador de questões respondidas
- ✅ Barra de progresso visual
- ✅ Cronômetro automático

### 📊 **Resultados e Feedback**
- ✅ Pontuação final com percentual
- ✅ Mensagem motivacional baseada no desempenho
- ✅ Gabarito completo com correção detalhada
- ✅ Indicação de acertos, erros e questões não respondidas

### 📜 **Certificado Digital**
- ✅ Geração automática em PDF
- ✅ Design profissional com bordas coloridas
- ✅ Informações completas (nome, pontuação, tempo, data)
- ✅ Layout otimizado para impressão (A4 paisagem)
- ✅ Pronto para salvar ou imprimir

### 🎨 **Design**
- ✅ Interface moderna e intuitiva
- ✅ Cores personalizadas da igreja (vermelho)
- ✅ Responsivo (mobile-first)
- ✅ Animações suaves
- ✅ Experiência de usuário otimizada

---

## 🚀 Tecnologias Utilizadas

- **HTML5** - Estrutura
- **CSS3** - Estilização
- **JavaScript (ES6+)** - Lógica e interatividade
- **html2pdf.js** - Geração de certificados em PDF

**Sem dependências de frameworks!** Código vanilla puro e leve.

---

## 📁 Estrutura do Projeto

```
enem-biblico-ebd/
├── index.html          # Estrutura HTML da aplicação
├── styles.css          # Estilos completos (responsivo)
├── script.js           # Lógica da aplicação
└── README.md           # Este arquivo
```

---

## 🛠️ Instalação e Uso

### **Método 1: Uso Local (Sem instalação)**

1. **Clone ou baixe o repositório**
```bash
git clone https://github.com/seu-usuario/enem-biblico-ebd.git
cd enem-biblico-ebd
```

2. **Abra o arquivo `index.html` no navegador**
   - Duplo clique no arquivo
   - Ou clique com botão direito → "Abrir com" → Navegador

✅ **Pronto!** Funciona offline.

---

### **Método 2: Com Live Server (Desenvolvimento)**

1. **Instale a extensão Live Server** no VS Code

2. **Abra a pasta do projeto** no VS Code

3. **Clique com botão direito** em `index.html`

4. **Selecione** "Open with Live Server"

✅ Abre automaticamente em `http://127.0.0.1:5500`

---

### **Método 3: Publicar Online (Grátis)**

#### **Opção A: Vercel**

```bash
npm install -g vercel
cd enem-biblico-ebd
vercel
```

#### **Opção B: Netlify**

1. Acesse: https://app.netlify.com/drop
2. Arraste a pasta do projeto
3. Pronto! Link gerado automaticamente

#### **Opção C: GitHub Pages**

1. Crie um repositório no GitHub
2. Faça upload dos arquivos
3. Vá em Settings → Pages
4. Selecione a branch `main` → Save

✅ Site disponível em: `https://seu-usuario.github.io/enem-biblico-ebd`

---

## 📝 Como Atualizar as Questões

### **Editar as 10 questões atuais:**

1. Abra o arquivo `script.js`
2. Localize o array `questions` (linha ~10)
3. Edite cada questão seguindo o formato:

```javascript
{ 
    id: 1, 
    trimester: "1º TRIMESTRE", 
    theme: "Lição 1 - O Sentido Bíblico da Salvação", 
    text: "Sua pergunta aqui?", 
    options: ["Opção A", "Opção B", "Opção C", "Opção D"], 
    answer: 1  // 0=A, 1=B, 2=C, 3=D
}
```

4. Salve o arquivo
5. Atualize o navegador (F5)

---

## 🎨 Personalização

### **Mudar cores da igreja:**

Abra `styles.css` e substitua:

```css
/* Cor principal */
#dc2626  →  sua-cor-hex

/* Procure por todas as ocorrências de: */
- #dc2626 (vermelho principal)
- #b91c1c (vermelho escuro)
- #7f1d1d (vermelho mais escuro)
```

### **Alterar informações da igreja:**

No `index.html` e `script.js`, procure e substitua:
- "Igreja Assembleia de Deus - Missão"
- "Augustinópolis - TO"

### **Personalizar certificado:**

No `script.js`, função `printCertificate()`, edite:
- Títulos
- Versículo bíblico
- Textos descritivos
- Tamanhos de fonte

---

## 📊 Roadmap (Próximas Versões)

### **v2.0 - Seleção de Categorias** 🔜
- [ ] Tela de seleção: Crianças / Jovens / Adultos
- [ ] Questionários específicos por faixa etária
- [ ] Certificados personalizados por categoria

### **v3.0 - Múltiplas Lições** 🔜
- [ ] Sistema de seleção de lições (1 a 13)
- [ ] Banco de questões completo do trimestre
- [ ] Histórico de lições realizadas

### **v4.0 - Painel Administrativo** 🔮
- [ ] Sistema de login (pastor/líder)
- [ ] Cadastro de novas lições via interface
- [ ] Gerenciamento de questões
- [ ] Ativar/desativar lições
- [ ] Dashboard com estatísticas

### **v5.0 - Estatísticas e Relatórios** 🔮
- [ ] Ver quantos alunos fizeram cada lição
- [ ] Média de acertos por questão
- [ ] Ranking dos melhores alunos
- [ ] Exportar relatórios (Excel/PDF)

### **v6.0 - Sistema de Usuários** 🔮
- [ ] Login individual para alunos
- [ ] Histórico pessoal de avaliações
- [ ] Progresso no trimestre
- [ ] Envio automático de certificados por email

---

## 🐛 Problemas Conhecidos

### **Certificado não gera:**
- **Solução:** Permita popups no navegador
- **Alternativa:** Use Chrome ou Firefox atualizado

### **Elementos aparecendo na página:**
- **Solução:** Certifique-se que o CSS está carregando corretamente
- Verifique se há erros no Console (F12)

### **Questões não aparecem:**
- **Solução:** Verifique se o `script.js` foi carregado
- Abra o Console (F12) e veja se há erros

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um Pull Request

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👥 Autores

**Igreja Assembleia de Deus - Missão**
- Augustinópolis - TO
- Desenvolvido com ❤️ para a EBD

---

## 📞 Suporte

Para dúvidas, sugestões ou reportar problemas:

- 📧 Email: seu-email@exemplo.com
- 📱 WhatsApp: (00) 00000-0000
- 🌐 Site: https://seu-site.com

---

## 🙏 Agradecimentos

- CPAD pela revista de Jovens
- Comunidade da Igreja AD Augustinópolis
- Todos os colaboradores do projeto

---

## 📖 Versículo

> *"Procura apresentar-te a Deus aprovado, como obreiro que não tem de que se envergonhar, que maneja bem a palavra da verdade."*
> 
> **2 Timóteo 2:15**

---

**Feito com 🙏 para a glória de Deus**

© 2025 - Igreja Assembleia de Deus - Missão Augustinópolis-TO
