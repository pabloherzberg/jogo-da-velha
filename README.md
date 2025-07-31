# 🎮 Jogo da Velha - Desafio Técnico

Um jogo da velha interativo desenvolvido em React puro com funcionalidades avançadas de personalização, temporização e sistema de pontuação.

## 📋 Visão Geral do Projeto

Este projeto implementa um jogo da velha (Tic Tac Toe) completo com as seguintes funcionalidades principais:

- **Jogo interativo**: Interface responsiva e intuitiva
- **Sistema de pontuação**: Acompanha vitórias até 11 partidas para determinar o campeão
- **Temporizador por jogada**: 5 segundos por turno com jogada automática
- **Personalização de cores**: Menu flutuante para customizar toda a paleta visual
- **Feedback visual**: Animações e transições suaves
- **Acessibilidade**: Labels apropriados e navegação por teclado

## 🏗️ Estrutura de Pastas

```
src/
├── App.js                  # Componente principal do jogo
├── hooks/
│   ├── useGameState.js     # Hook customizado para lógica do jogo
│   └── useTheme.js         # Hook customizado para gerenciamento de cores
├── components/
│   ├── Board.js            # Componente do tabuleiro
│   ├── Cell.js             # Componente de célula individual
│   ├── Timer.js            # Componente do temporizador
│   ├── ScoreBoard.js       # Componente do placar
│   └── CustomizationMenu.js # Menu de personalização
└── styles/
    └── animations.css      # Animações CSS customizadas
```

*Nota: Nesta implementação, todos os componentes estão organizados em um único arquivo para facilitar a visualização, mas em um projeto real seriam separados conforme a estrutura acima.*

## 🔧 Decisões Técnicas

### **Hooks Customizados**

#### `useGameState`
- **Responsabilidade**: Gerencia todo o estado do jogo (tabuleiro, jogador atual, pontuação, timer)
- **Justificativa**: Centraliza a lógica de negócios e facilita a manutenção
- **Funcionalidades**:
  - Controle de turnos e validação de jogadas
  - Detecção de vitória e empate
  - Sistema de pontuação acumulativa
  - Integração com o temporizador

#### `useTheme`
- **Responsabilidade**: Gerencia as cores personalizáveis da interface
- **Justificativa**: Permite customização em tempo real sem re-renderizações desnecessárias
- **Funcionalidades**:
  - Estado das cores (X, O, tabuleiro, fundo, células)
  - Função de atualização de cores individuais

### **Arquitetura de Componentes**

#### Separação de Responsabilidades
- **`App`**: Componente container principal, orquestra todos os outros
- **`Board`**: Renderiza o grid 3x3 e delega cliques para as células
- **`Cell`**: Componente apresentacional puro, sem lógica de negócio
- **`Timer`**: Exibe countdown com feedback visual para urgência
- **`ScoreBoard`**: Mostra pontuação e detecta vitória do campeonato
- **`CustomizationMenu`**: Menu flutuante para personalização visual

#### Padrões Utilizados
- **Container/Presenter**: Separação clara entre lógica e apresentação
- **Composition**: Componentes reutilizáveis e compostos
- **Single Responsibility**: Cada componente tem uma única responsabilidade

### **Gerenciamento de Estado**

#### Estado Local vs Global
- **Local**: Usado para estados específicos de componentes (menu aberto/fechado)
- **Hooks customizados**: Para estados compartilhados entre múltiplos componentes
- **Justificativa**: Evita over-engineering com bibliotecas externas mantendo simplicidade

#### Otimizações de Performance
- **useCallback**: Memoização de funções para evitar re-criações desnecessárias
- **Shallow comparison**: Estado imutável para otimizar re-renderizações
- **Event delegation**: Manipulação eficiente de eventos no tabuleiro

### **Temporizador e Jogadas Automáticas**

#### Implementação
- **useEffect** com `setInterval` para countdown
- **Cleanup** adequado para evitar memory leaks
- **Jogada aleatória** em células vazias quando o tempo expira

#### Considerações
- Timer pausado durante game over
- Reset automático do timer a cada jogada
- Feedback visual quando restam 2 segundos

### **Personalização Visual**

#### Menu Flutuante
- **Posição fixa**: Não interfere com o layout do jogo
- **Transições CSS**: Movimento suave de entrada/saída
- **Color inputs**: Interface nativa do browser para seleção de cores

#### Sistema de Cores
- **CSS-in-JS**: Aplicação dinâmica de cores via props
- **Hover effects**: Feedback visual em botões e células
- **Consistent theming**: Paleta coesa em toda a aplicação

## 🚀 Instruções de Build e Execução

### Pré-requisitos
- Node.js (versão 14 ou superior)
- npm ou yarn

### Instalação e Execução

```bash
# Clone o repositório
git clone https://github.com/pabloherzberg/jogo-da-velha.git
cd jogo-da-velha

# Instale as dependências
npm install

# Execute em modo de desenvolvimento
npm start

# Build para produção
npm run build

# Execute os testes
npm test
```

### Deploy
O projeto pode ser facilmente deployado em:
- **Netlify**: `npm run build` + drag & drop da pasta `build`
- **Vercel**: Conectar repositório Git
- **GitHub Pages**: Configurar workflow para build automático

## 🎯 Funcionalidades Implementadas

### ✅ Requisitos Obrigatórios
- [x] **Linguagem**: JavaScript puro (sem TypeScript)
- [x] **Hooks personalizados**: `useGameState` e `useTheme`
- [x] **Tipagem de elementos**: PropTypes e JSDoc para documentação
- [x] **Sem bibliotecas externas**: Apenas React puro
- [x] **Menu flutuante**: Personalização de cores em tempo real
- [x] **Temporizador**: 5 segundos por jogada com auto-play
- [x] **Cálculo de resultado**: Detecção de vitória, empate e pontuação
- [x] **Área de pontuação**: Sistema de 11 vitórias para campeonato
- [x] **Documentação**: README completo
- [x] **Git repository**: Código versionado

### 🌟 Diferenciais Implementados
- [x] **Hooks nativos criativos**: `useEffect` para timer, `useCallback` para otimização
- [x] **Organização por responsabilidades**: Arquitetura modular e escalável  
- [x] **Separação lógica/apresentação**: Pattern Container/Presenter
- [x] **Estilização coesa**: Sistema de cores consistente
- [x] **Acessibilidade**: Labels ARIA e navegação por teclado
- [x] **UX aprimorada**: Animações, hover effects e responsividade

## 🧪 Decisões de UX/UI

### Interface Intuitiva
- **Feedback visual**: Células highlight no hover
- **Estados claros**: Indicação visual do jogador atual
- **Animações sutis**: Transições suaves sem causar distração

### Responsividade
- **Flexbox**: Layout adaptável a diferentes tamanhos de tela
- **Mobile-first**: Interface otimizada para dispositivos móveis
- **Touch-friendly**: Botões com tamanho adequado para toque

### Acessibilidade
- **Semantic HTML**: Estrutura semântica adequada
- **ARIA labels**: Descrições para screen readers
- **Contrast**: Cores com contraste adequado
- **Keyboard navigation**: Navegação completa por teclado

## 🔄 Fluxo do Jogo

1. **Início**: Jogador X sempre começa, timer ativado
2. **Jogada**: Click na célula ou auto-play quando timer expira
3. **Validação**: Verificação de vitória ou empate
4. **Pontuação**: Atualização do placar após cada partida  
5. **Campeonato**: Primeiro a 11 vitórias é declarado campeão
6. **Reset**: Novo jogo mantém pontuação, reset manual limpa tudo

## 🎨 Personalização

O menu flutuante (ícone 🎨) permite customizar:
- **Cor do X**: Cor das jogadas do jogador X
- **Cor do O**: Cor das jogadas do jogador O  
- **Cor do Tabuleiro**: Cor das bordas e divisórias
- **Cor de Fundo**: Cor de fundo da aplicação
- **Cor das Células**: Cor de fundo das células vazias

## 📊 Métricas de Qualidade

- **Performance**: Renderizações otimizadas com hooks memoizados
- **Manutenibilidade**: Código modular e bem documentado
- **Testabilidade**: Lógica separada da apresentação
- **Acessibilidade**: Conformidade com padrões WCAG
- **Responsividade**: Suporte a múltiplos dispositivos

## 🚀 Próximos Passos

Possíveis melhorias futuras:
- Modo multiplayer online
- Diferentes tamanhos de tabuleiro (4x4, 5x5)
- Sistema de ranking persistente
- Tema dark/light mode
- Análise de jogadas com IA
- Histórico de partidas

---

**Desenvolvido com ❤️ usando React puro**

Teste usando este link da vercel

https://jogo-da-velha-gamma-five.vercel.app/