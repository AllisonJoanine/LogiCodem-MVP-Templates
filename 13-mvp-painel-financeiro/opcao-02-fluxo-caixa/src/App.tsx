import type { CSSProperties, FormEvent, ReactNode } from 'react';
import { useMemo, useState } from 'react';
import {
  ArrowRight,
  BarChart3,
  Bell,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  CreditCard,
  Download,
  Filter,
  LayoutDashboard,
  LogIn,
  Mail,
  MessageCircle,
  PackagePlus,
  Phone,
  Plus,
  RefreshCcw,
  Search,
  Send,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  UserPlus,
  Users,
  Wand2,
  X
} from 'lucide-react';
import { appData } from './data';
import type { CatalogItem, ChatMessage, RecordItem } from './types';

const currency = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

type CssVars = CSSProperties & Record<string, string>;

function App() {
  const [records, setRecords] = useState<RecordItem[]>(() => appData.records);
  const [products, setProducts] = useState<CatalogItem[]>(() => appData.products);
  const [messages, setMessages] = useState<ChatMessage[]>(() => appData.messages);
  const [query, setQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('Todos');
  const [selectedId, setSelectedId] = useState(appData.records[0]?.id ?? '');
  const [toast, setToast] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [activePlan, setActivePlan] = useState(appData.plans[1]?.name ?? appData.plans[0]?.name ?? '');
  const [leadForm, setLeadForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [quickForm, setQuickForm] = useState({ title: '', owner: '', amount: '', date: '2026-07-08' });
  const [appointment, setAppointment] = useState({ service: appData.services[0]?.name ?? '', date: '2026-07-08', time: appData.timeSlots[1] ?? '09:00', name: '' });
  const [productForm, setProductForm] = useState({ name: '', stock: '12', category: 'Novo item' });
  const [transactionForm, setTransactionForm] = useState({ title: '', amount: '1200', type: 'Receita' });
  const [cart, setCart] = useState<Record<string, number>>({});
  const [chatInput, setChatInput] = useState('');
  const [emailContext, setEmailContext] = useState('');
  const [emailDraft, setEmailDraft] = useState('');
  const [loggedProfile, setLoggedProfile] = useState('');
  const [selectedPost, setSelectedPost] = useState(appData.posts[0]?.id ?? '');

  const themeStyle: CssVars = {
    '--bg': appData.theme.bg,
    '--surface': appData.theme.surface,
    '--surface-alt': appData.theme.surfaceAlt,
    '--text': appData.theme.text,
    '--muted': appData.theme.muted,
    '--primary': appData.theme.primary,
    '--secondary': appData.theme.secondary,
    '--accent': appData.theme.accent,
    '--border': appData.theme.border,
    '--shadow': appData.theme.shadow,
    '--on-primary': appData.theme.onPrimary,
    '--hero-overlay': appData.theme.heroOverlay,
    '--hero-tint': appData.theme.heroTint,
    '--pattern': appData.theme.pattern,
    '--radius': appData.theme.radius
  };

  const selectedRecord = records.find((record) => record.id === selectedId) ?? records[0];
  const statuses = useMemo(() => ['Todos', ...Array.from(new Set(records.map((record) => record.status)))], [records]);
  const filteredRecords = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return records.filter((record) => {
      const matchesQuery = !normalized || [record.title, record.owner, record.category, record.status].join(' ').toLowerCase().includes(normalized);
      const matchesStatus = statusFilter === 'Todos' || record.status === statusFilter;
      return matchesQuery && matchesStatus;
    });
  }, [query, records, statusFilter]);
  const cartItems = products.filter((item) => cart[item.id]);
  const cartTotal = cartItems.reduce((total, item) => total + item.price * (cart[item.id] ?? 0), 0);
  const selectedBlogPost = appData.posts.find((post) => post.id === selectedPost) ?? appData.posts[0];
  const shellClass = ['app-shell', 'visual-' + appData.visual.layout, 'texture-' + appData.visual.texture, 'kind-' + appData.kind].join(' ');

  function showToast(message: string) {
    setToast(message);
    window.setTimeout(() => setToast(''), 2800);
  }

  function scrollToWorkspace() {
    document.getElementById('workspace')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function addRecord(overrides: Partial<RecordItem>) {
    const base = records[0] ?? appData.records[0];
    const next: RecordItem = {
      ...base,
      id: appData.kind.slice(0, 3).toUpperCase() + '-' + (Math.floor(Math.random() * 8000) + 2000),
      title: overrides.title?.trim() || quickForm.title.trim() || 'Nova solicitacao registrada',
      owner: overrides.owner?.trim() || quickForm.owner.trim() || 'Cliente demo',
      email: overrides.email ?? 'contato@cliente.com.br',
      phone: overrides.phone ?? '(11) 90000-0000',
      status: overrides.status ?? 'Novo',
      stage: overrides.stage ?? 'Novo',
      priority: overrides.priority ?? 'Media',
      amount: overrides.amount ?? Number(quickForm.amount || base.amount),
      date: overrides.date ?? quickForm.date,
      category: overrides.category ?? appData.optionTitle,
      description: overrides.description ?? 'Criado pelo formulario do MVP para demonstrar fluxo real no frontend.',
      progress: overrides.progress ?? 12,
      meta: overrides.meta ?? 'Criado agora',
      tags: overrides.tags ?? ['Novo', 'Demo']
    };
    setRecords((current) => [next, ...current]);
    setSelectedId(next.id);
    setQuickForm({ title: '', owner: '', amount: '', date: '2026-07-08' });
    showToast('Registro criado com sucesso.');
  }

  function updateRecord(id: string, patch: Partial<RecordItem>) {
    setRecords((current) => current.map((record) => (record.id === id ? { ...record, ...patch } : record)));
    showToast('Registro atualizado.');
  }

  function submitQuickForm(event: FormEvent) {
    event.preventDefault();
    if (!quickForm.title.trim() || !quickForm.owner.trim()) {
      showToast('Preencha titulo e responsavel.');
      return;
    }
    addRecord({});
  }

  function submitLead(event: FormEvent) {
    event.preventDefault();
    if (!leadForm.name.trim() || !leadForm.email.includes('@')) {
      showToast('Informe nome e e-mail valido.');
      return;
    }
    addRecord({
      title: 'Novo lead: ' + leadForm.message.slice(0, 48),
      owner: leadForm.name,
      email: leadForm.email,
      phone: leadForm.phone || '(00) 00000-0000',
      status: 'Novo',
      category: 'Lead comercial',
      description: leadForm.message || 'Lead interessado na proposta do MVP.'
    });
    setLeadForm({ name: '', email: '', phone: '', message: '' });
  }

  function refreshData() {
    setIsLoading(true);
    setHasError(false);
    window.setTimeout(() => {
      setIsLoading(false);
      showToast('Dados mockados atualizados.');
    }, 650);
  }

  function createAppointment(event: FormEvent) {
    event.preventDefault();
    if (!appointment.name.trim()) {
      showToast('Informe o nome do cliente.');
      return;
    }
    addRecord({
      title: appointment.service,
      owner: appointment.name,
      status: 'Agendado',
      stage: 'Agendado',
      date: appointment.date,
      meta: appointment.time,
      category: 'Agenda'
    });
    setAppointment((current) => ({ ...current, name: '' }));
  }

  function submitProduct(event: FormEvent) {
    event.preventDefault();
    if (!productForm.name.trim()) {
      showToast('Informe o nome do item.');
      return;
    }
    const next: CatalogItem = {
      id: 'ITEM-' + (products.length + 1),
      name: productForm.name,
      category: productForm.category,
      price: 189,
      stock: Number(productForm.stock || 0),
      description: 'Item criado no frontend para demonstrar cadastro e movimentacao.',
      featured: false,
      image: appData.heroImage
    };
    setProducts((current) => [next, ...current]);
    setProductForm({ name: '', stock: '12', category: 'Novo item' });
    showToast('Item cadastrado.');
  }

  function adjustStock(id: string, delta: number) {
    setProducts((current) => current.map((item) => (item.id === id ? { ...item, stock: Math.max(0, item.stock + delta) } : item)));
    showToast(delta > 0 ? 'Entrada registrada.' : 'Saida registrada.');
  }

  function submitTransaction(event: FormEvent) {
    event.preventDefault();
    if (!transactionForm.title.trim()) {
      showToast('Informe uma descricao.');
      return;
    }
    addRecord({
      title: transactionForm.title,
      amount: Number(transactionForm.amount || 0),
      status: transactionForm.type === 'Receita' ? 'Pago' : 'Pendente',
      category: transactionForm.type,
      progress: transactionForm.type === 'Receita' ? 100 : 45
    });
    setTransactionForm({ title: '', amount: '1200', type: 'Receita' });
  }

  function addToCart(id: string) {
    setCart((current) => ({ ...current, [id]: (current[id] ?? 0) + 1 }));
    showToast('Item adicionado.');
  }

  function clearCart() {
    setCart({});
    showToast('Pedido enviado para simulacao.');
  }

  function sendChat(text = chatInput) {
    const clean = text.trim();
    if (!clean) {
      showToast('Digite uma mensagem.');
      return;
    }
    const lower = clean.toLowerCase();
    const response = lower.includes('preco') || lower.includes('valor')
      ? 'Os valores dependem da adaptacao, mas este template ja ajuda a vender uma primeira versao rapidamente.'
      : lower.includes('prazo')
        ? 'Um MVP como este pode virar proposta em poucos dias, conectando backend e identidade do cliente.'
        : lower.includes('humano')
          ? 'Perfeito, vou marcar esta conversa como prioridade para atendimento humano.'
          : 'Entendi. Esta resposta e simulada para demonstrar atendimento, triagem e continuidade de conversa.';
    setMessages((current) => [...current, { role: 'user', text: clean }, { role: 'assistant', text: response }]);
    setChatInput('');
  }

  function generateEmail(event?: FormEvent) {
    event?.preventDefault();
    const record = selectedRecord ?? records[0];
    const draft = [
      'Assunto: Atualizacao sobre ' + (record?.title ?? appData.optionTitle),
      '',
      'Ola, ' + (record?.owner ?? 'cliente') + '.',
      '',
      'Passando para atualizar o andamento de ' + appData.optionTitle + '. ' + (emailContext || 'Registramos sua solicitacao e ja estamos acompanhando os proximos passos.'),
      '',
      'Status atual: ' + (record?.status ?? 'Novo') + '.',
      'Proximo passo: nossa equipe retornara com uma orientacao objetiva e prazo estimado.',
      '',
      'Atenciosamente,',
      appData.brandName
    ].join('\n');
    setEmailDraft(draft);
    showToast('E-mail gerado.');
  }

  async function copyEmail() {
    if (!emailDraft) {
      generateEmail();
      return;
    }
    await navigator.clipboard?.writeText(emailDraft);
    showToast('Texto copiado.');
  }

  function login(event: FormEvent) {
    event.preventDefault();
    if (!leadForm.email.includes('@') || leadForm.message.length < 4) {
      showToast('Use e-mail e senha demo com 4 caracteres.');
      return;
    }
    setLoggedProfile('Administrador');
    showToast('Sessao demo iniciada.');
  }

  function renderHeroPanel() {
    if (appData.kind === 'chatbot') {
      return (
        <div className="hero-widget chat-preview">
          <div className="widget-title"><MessageCircle size={18} /> Conversa demo</div>
          {messages.slice(-3).map((message, index) => (
            <div className={'bubble ' + message.role} key={message.text + index}>{message.text}</div>
          ))}
          <div className="inline-action">
            <input value={chatInput} onChange={(event) => setChatInput(event.target.value)} placeholder="Digite uma duvida" />
            <button className="icon-button" onClick={() => sendChat()} aria-label="Enviar mensagem"><Send size={18} /></button>
          </div>
        </div>
      );
    }

    if (appData.kind === 'auth') {
      return (
        <form className="hero-widget" onSubmit={login}>
          <div className="widget-title"><ShieldCheck size={18} /> Acesso protegido</div>
          <input value={leadForm.email} onChange={(event) => setLeadForm((current) => ({ ...current, email: event.target.value }))} placeholder="email@empresa.com.br" />
          <input value={leadForm.message} onChange={(event) => setLeadForm((current) => ({ ...current, message: event.target.value }))} placeholder="Senha demo" type="password" />
          <button className="primary-button" type="submit"><LogIn size={18} /> Entrar no painel</button>
        </form>
      );
    }

    if (['marketing', 'landing', 'portfolio', 'blog'].includes(appData.kind)) {
      return (
        <form className="hero-widget" onSubmit={submitLead}>
          <div className="widget-title"><Sparkles size={18} /> Interesse comercial</div>
          <input value={leadForm.name} onChange={(event) => setLeadForm((current) => ({ ...current, name: event.target.value }))} placeholder="Nome" />
          <input value={leadForm.email} onChange={(event) => setLeadForm((current) => ({ ...current, email: event.target.value }))} placeholder="E-mail" />
          <textarea value={leadForm.message} onChange={(event) => setLeadForm((current) => ({ ...current, message: event.target.value }))} placeholder="Conte rapidamente o que precisa" />
          <button className="primary-button" type="submit"><Send size={18} /> Enviar contato</button>
        </form>
      );
    }

    if (appData.kind === 'scheduler' || appData.kind === 'clinic') {
      return renderAppointmentForm('hero-widget');
    }

    if (appData.kind === 'catalog' || appData.kind === 'delivery') {
      return (
        <div className="hero-widget">
          <div className="widget-title"><ShoppingCart size={18} /> Pedido atual</div>
          <strong className="total">{currency.format(cartTotal)}</strong>
          <p>{cartItems.length ? cartItems.map((item) => item.name).join(', ') : 'Selecione itens no catalogo para montar uma simulacao.'}</p>
          <button className="primary-button" onClick={clearCart} disabled={!cartItems.length}><Send size={18} /> Simular envio</button>
        </div>
      );
    }

    if (appData.kind === 'email') {
      return (
        <form className="hero-widget" onSubmit={generateEmail}>
          <div className="widget-title"><Mail size={18} /> Gerador rapido</div>
          <textarea value={emailContext} onChange={(event) => setEmailContext(event.target.value)} placeholder="Contexto do chamado ou cliente" />
          <button className="primary-button" type="submit"><Wand2 size={18} /> Gerar e-mail</button>
        </form>
      );
    }

    return (
      <form className="hero-widget" onSubmit={submitQuickForm}>
        <div className="widget-title"><Plus size={18} /> Novo registro</div>
        <input value={quickForm.title} onChange={(event) => setQuickForm((current) => ({ ...current, title: event.target.value }))} placeholder="Titulo" />
        <input value={quickForm.owner} onChange={(event) => setQuickForm((current) => ({ ...current, owner: event.target.value }))} placeholder="Responsavel ou cliente" />
        <button className="primary-button" type="submit"><CheckCircle2 size={18} /> Registrar</button>
      </form>
    );
  }

  function renderAppointmentForm(className = 'panel') {
    return (
      <form className={className} onSubmit={createAppointment}>
        <div className="widget-title"><CalendarDays size={18} /> Agendar atendimento</div>
        <select value={appointment.service} onChange={(event) => setAppointment((current) => ({ ...current, service: event.target.value }))}>
          {appData.services.map((service) => <option key={service.id}>{service.name}</option>)}
        </select>
        <div className="two-fields">
          <input type="date" value={appointment.date} onChange={(event) => setAppointment((current) => ({ ...current, date: event.target.value }))} />
          <select value={appointment.time} onChange={(event) => setAppointment((current) => ({ ...current, time: event.target.value }))}>
            {appData.timeSlots.map((slot) => <option key={slot}>{slot}</option>)}
          </select>
        </div>
        <input value={appointment.name} onChange={(event) => setAppointment((current) => ({ ...current, name: event.target.value }))} placeholder="Nome do cliente" />
        <button className="primary-button" type="submit"><CheckCircle2 size={18} /> Confirmar horario</button>
      </form>
    );
  }

  function renderToolbar() {
    return (
      <div className="toolbar">
        <label className="search-field">
          <Search size={18} />
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar por cliente, status ou categoria" />
        </label>
        <select value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)}>
          {statuses.map((status) => <option key={status}>{status}</option>)}
        </select>
        <button className="secondary-button" onClick={refreshData}><RefreshCcw size={18} /> Atualizar</button>
        <button className="ghost-button" onClick={() => setHasError((current) => !current)}><Bell size={18} /> {hasError ? 'Limpar erro' : 'Simular erro'}</button>
      </div>
    );
  }

  function renderMetricGrid() {
    return (
      <div className="metric-grid">
        {appData.metrics.map((metric) => (
          <article className={'metric-card tone-' + metric.tone} key={metric.label}>
            <span>{metric.label}</span>
            <strong>{metric.value}</strong>
            <small>{metric.trend} · {metric.note}</small>
          </article>
        ))}
      </div>
    );
  }

  function renderRecordList(title = 'Registros recentes') {
    if (hasError) {
      return <StateBlock icon={<X size={24} />} title="Nao foi possivel carregar" text="O erro e simulado. Limpe o estado para voltar aos dados mockados." />;
    }
    if (isLoading) {
      return <div className="skeleton-list"><span /><span /><span /></div>;
    }
    if (!filteredRecords.length) {
      return <StateBlock icon={<Filter size={24} />} title="Nada encontrado" text="Altere os filtros ou crie um novo registro para preencher a lista." />;
    }
    return (
      <div className="panel">
        <div className="panel-heading">
          <div>
            <span className="eyebrow">{filteredRecords.length} itens</span>
            <h3>{title}</h3>
          </div>
          <button className="ghost-button" onClick={() => showToast('Exportacao CSV simulada.')}><Download size={18} /> Exportar</button>
        </div>
        <div className="record-list">
          {filteredRecords.map((record) => (
            <button className={'record-row ' + (record.id === selectedRecord?.id ? 'active' : '')} key={record.id} onClick={() => setSelectedId(record.id)}>
              <span>
                <strong>{record.title}</strong>
                <small>{record.owner} · {record.category}</small>
              </span>
              <StatusPill status={record.status} />
            </button>
          ))}
        </div>
      </div>
    );
  }

  function renderRecordDetail(title = 'Detalhes') {
    if (!selectedRecord) {
      return <StateBlock icon={<ClipboardList size={24} />} title="Selecione um registro" text="A lista esta vazia no momento." />;
    }
    return (
      <aside className="panel detail-panel">
        <div className="panel-heading">
          <div>
            <span className="eyebrow">{selectedRecord.id}</span>
            <h3>{title}</h3>
          </div>
          <StatusPill status={selectedRecord.status} />
        </div>
        <h4>{selectedRecord.title}</h4>
        <p>{selectedRecord.description}</p>
        <div className="detail-grid">
          <span><strong>Responsavel</strong>{selectedRecord.owner}</span>
          <span><strong>Contato</strong>{selectedRecord.phone}</span>
          <span><strong>Data</strong>{selectedRecord.date}</span>
          <span><strong>Valor</strong>{currency.format(selectedRecord.amount)}</span>
        </div>
        <div className="progress-line"><span style={{ width: selectedRecord.progress + '%' }} /></div>
        <div className="tag-row">
          {selectedRecord.tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
        <div className="button-row">
          <button className="secondary-button" onClick={() => updateRecord(selectedRecord.id, { status: 'Em andamento', progress: Math.min(85, selectedRecord.progress + 20) })}>Mover</button>
          <button className="primary-button" onClick={() => updateRecord(selectedRecord.id, { status: 'Concluido', progress: 100 })}>Concluir</button>
        </div>
      </aside>
    );
  }

  function renderMarketingExperience() {
    return (
      <div className="experience-stack">
        <section className="split-section">
          <div>
            <span className="eyebrow">Oferta pronta para vender</span>
            <h2>Uma narrativa comercial com prova, CTA e captura de leads.</h2>
            <p>{appData.summary}</p>
            <div className="feature-list">
              {appData.scopeBullets.slice(0, 5).map((item) => <span key={item}><CheckCircle2 size={17} /> {item}</span>)}
            </div>
          </div>
          <form className="panel" onSubmit={submitLead}>
            <h3>Solicitar proposta</h3>
            <input value={leadForm.name} onChange={(event) => setLeadForm((current) => ({ ...current, name: event.target.value }))} placeholder="Nome completo" />
            <input value={leadForm.email} onChange={(event) => setLeadForm((current) => ({ ...current, email: event.target.value }))} placeholder="E-mail profissional" />
            <input value={leadForm.phone} onChange={(event) => setLeadForm((current) => ({ ...current, phone: event.target.value }))} placeholder="WhatsApp" />
            <textarea value={leadForm.message} onChange={(event) => setLeadForm((current) => ({ ...current, message: event.target.value }))} placeholder="Objetivo do projeto" />
            <button className="primary-button" type="submit"><Send size={18} /> Enviar</button>
          </form>
        </section>
        <section className="plans-grid">
          {appData.plans.map((plan) => (
            <article className={'plan-card ' + (activePlan === plan.name ? 'selected' : '')} key={plan.name}>
              <span className="eyebrow">{plan.highlight ? 'Mais vendido' : 'Plano'}</span>
              <h3>{plan.name}</h3>
              <strong>{plan.price}</strong>
              <p>{plan.description}</p>
              {plan.features.map((feature) => <small key={feature}><CheckCircle2 size={15} /> {feature}</small>)}
              <button className="secondary-button" onClick={() => { setActivePlan(plan.name); showToast('Plano selecionado: ' + plan.name); }}>Selecionar</button>
            </article>
          ))}
        </section>
        <section className="faq-grid">
          {appData.faq.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </section>
      </div>
    );
  }

  function renderDashboardExperience() {
    const max = Math.max(...records.map((record) => record.amount), 1);
    return (
      <div className="experience-stack">
        {renderToolbar()}
        {renderMetricGrid()}
        <section className="workspace-grid">
          <div className="panel">
            <div className="panel-heading">
              <div>
                <span className="eyebrow">Grafico mockado</span>
                <h3>Desempenho por registro</h3>
              </div>
              <BarChart3 />
            </div>
            <div className="bar-chart">
              {records.map((record) => (
                <div className="bar-row" key={record.id}>
                  <span>{record.owner.split(' ')[0]}</span>
                  <div><i style={{ width: Math.max(12, (record.amount / max) * 100) + '%' }} /></div>
                  <strong>{currency.format(record.amount)}</strong>
                </div>
              ))}
            </div>
          </div>
          {renderRecordList('Tabela operacional')}
        </section>
      </div>
    );
  }

  function renderOperationalExperience(label = 'Operacao') {
    return (
      <div className="experience-stack">
        {renderToolbar()}
        <section className="workspace-grid">
          <form className="panel" onSubmit={submitQuickForm}>
            <div className="panel-heading">
              <div>
                <span className="eyebrow">Novo fluxo</span>
                <h3>{label}</h3>
              </div>
              <Plus />
            </div>
            <input value={quickForm.title} onChange={(event) => setQuickForm((current) => ({ ...current, title: event.target.value }))} placeholder="Titulo do registro" />
            <input value={quickForm.owner} onChange={(event) => setQuickForm((current) => ({ ...current, owner: event.target.value }))} placeholder="Cliente ou responsavel" />
            <input type="date" value={quickForm.date} onChange={(event) => setQuickForm((current) => ({ ...current, date: event.target.value }))} />
            <button className="primary-button" type="submit"><CheckCircle2 size={18} /> Criar</button>
          </form>
          {renderRecordDetail(label)}
        </section>
        {renderRecordList('Fila de trabalho')}
      </div>
    );
  }

  function renderSchedulerExperience() {
    return (
      <div className="experience-stack">
        <section className="workspace-grid">
          {renderAppointmentForm()}
          <div className="panel">
            <div className="panel-heading"><h3>Servicos disponiveis</h3><CalendarDays /></div>
            <div className="service-grid">
              {appData.services.map((service) => (
                <button className="service-tile" key={service.id} onClick={() => setAppointment((current) => ({ ...current, service: service.name }))}>
                  <strong>{service.name}</strong>
                  <span>{currency.format(service.price)}</span>
                  <small>{service.description}</small>
                </button>
              ))}
            </div>
          </div>
        </section>
        {renderRecordList('Agendamentos confirmados')}
      </div>
    );
  }

  function renderInventoryExperience() {
    return (
      <div className="experience-stack">
        <section className="workspace-grid">
          <form className="panel" onSubmit={submitProduct}>
            <div className="panel-heading"><h3>Cadastrar item</h3><PackagePlus /></div>
            <input value={productForm.name} onChange={(event) => setProductForm((current) => ({ ...current, name: event.target.value }))} placeholder="Nome do produto" />
            <input value={productForm.category} onChange={(event) => setProductForm((current) => ({ ...current, category: event.target.value }))} placeholder="Categoria" />
            <input type="number" value={productForm.stock} onChange={(event) => setProductForm((current) => ({ ...current, stock: event.target.value }))} />
            <button className="primary-button" type="submit"><Plus size={18} /> Adicionar</button>
          </form>
          <div className="panel">
            <div className="panel-heading"><h3>Alertas de estoque</h3><Bell /></div>
            {products.filter((item) => item.stock <= 12).map((item) => (
              <div className="stock-row" key={item.id}>
                <span><strong>{item.name}</strong><small>{item.category}</small></span>
                <StatusPill status={item.stock <= 8 ? 'Risco' : 'Baixo'} />
              </div>
            ))}
          </div>
        </section>
        <section className="catalog-grid">
          {products.map((item) => (
            <article className="product-card" key={item.id}>
              <strong>{item.name}</strong>
              <p>{item.description}</p>
              <div className="stock-meter"><span style={{ width: Math.min(100, item.stock * 4) + '%' }} /></div>
              <small>{item.stock} unidades · {item.category}</small>
              <div className="button-row">
                <button className="secondary-button" onClick={() => adjustStock(item.id, 1)}>Entrada</button>
                <button className="ghost-button" onClick={() => adjustStock(item.id, -1)}>Saida</button>
              </div>
            </article>
          ))}
        </section>
      </div>
    );
  }

  function renderCrmExperience() {
    const stages = ['Novo', 'Contato', 'Proposta', 'Fechado'];
    return (
      <div className="experience-stack">
        <form className="inline-form" onSubmit={submitQuickForm}>
          <input value={quickForm.title} onChange={(event) => setQuickForm((current) => ({ ...current, title: event.target.value }))} placeholder="Empresa ou oportunidade" />
          <input value={quickForm.owner} onChange={(event) => setQuickForm((current) => ({ ...current, owner: event.target.value }))} placeholder="Responsavel" />
          <button className="primary-button" type="submit"><UserPlus size={18} /> Novo lead</button>
        </form>
        <section className="kanban">
          {stages.map((stage) => (
            <div className="kanban-column" key={stage}>
              <h3>{stage}</h3>
              {records.filter((record) => record.stage === stage || record.status === stage).map((record) => (
                <article className="kanban-card" key={record.id}>
                  <strong>{record.title}</strong>
                  <small>{record.owner} · {currency.format(record.amount)}</small>
                  <button className="ghost-button" onClick={() => updateRecord(record.id, { stage: stages[Math.min(stages.length - 1, stages.indexOf(stage) + 1)], status: stages[Math.min(stages.length - 1, stages.indexOf(stage) + 1)] })}>Avancar</button>
                </article>
              ))}
            </div>
          ))}
        </section>
      </div>
    );
  }

  function renderChatbotExperience() {
    return (
      <section className="chat-layout">
        <div className="panel knowledge-panel">
          <h3>Base simulada</h3>
          {['preco', 'prazo', 'status', 'humano'].map((keyword) => (
            <button className="quick-reply" key={keyword} onClick={() => sendChat(keyword)}>Perguntar sobre {keyword}</button>
          ))}
          <p>As respostas mudam por palavra-chave e mantem historico local durante a sessao.</p>
        </div>
        <div className="panel chat-window">
          <div className="message-list">
            {messages.map((message, index) => <div className={'bubble ' + message.role} key={message.text + index}>{message.text}</div>)}
          </div>
          <div className="inline-action">
            <input value={chatInput} onChange={(event) => setChatInput(event.target.value)} placeholder="Digite sua mensagem" />
            <button className="primary-button" onClick={() => sendChat()}><Send size={18} /> Enviar</button>
          </div>
        </div>
      </section>
    );
  }

  function renderEmailExperience() {
    return (
      <section className="workspace-grid">
        <form className="panel" onSubmit={generateEmail}>
          <div className="panel-heading"><h3>Contexto do e-mail</h3><Mail /></div>
          <select value={selectedId} onChange={(event) => setSelectedId(event.target.value)}>
            {records.map((record) => <option value={record.id} key={record.id}>{record.title}</option>)}
          </select>
          <textarea value={emailContext} onChange={(event) => setEmailContext(event.target.value)} placeholder="Detalhe o que precisa ser comunicado" />
          <button className="primary-button" type="submit"><Wand2 size={18} /> Gerar texto</button>
        </form>
        <div className="panel email-preview">
          <div className="panel-heading"><h3>Preview</h3><button className="ghost-button" onClick={copyEmail}>Copiar</button></div>
          <pre>{emailDraft || 'Gere um e-mail para visualizar o texto aqui.'}</pre>
        </div>
      </section>
    );
  }

  function renderCatalogExperience() {
    return (
      <div className="experience-stack">
        <div className="toolbar">
          <label className="search-field"><Search size={18} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar no catalogo" /></label>
          <strong className="cart-total">{currency.format(cartTotal)}</strong>
          <button className="primary-button" onClick={clearCart} disabled={!cartItems.length}><Phone size={18} /> Enviar WhatsApp</button>
        </div>
        <section className="catalog-grid">
          {products.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()) || item.category.toLowerCase().includes(query.toLowerCase())).map((item) => (
            <article className="product-card with-image" key={item.id}>
              <img src={item.image} alt="" />
              <span className="eyebrow">{item.category}</span>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <strong>{currency.format(item.price)}</strong>
              <button className="secondary-button" onClick={() => addToCart(item.id)}><ShoppingCart size={18} /> Adicionar</button>
            </article>
          ))}
        </section>
      </div>
    );
  }

  function renderFinanceExperience() {
    const income = records.filter((record) => record.category === 'Receita' || record.status === 'Pago').reduce((total, record) => total + record.amount, 0);
    const outcome = records.filter((record) => record.category !== 'Receita' && record.status !== 'Pago').reduce((total, record) => total + record.amount, 0);
    return (
      <div className="experience-stack">
        <section className="metric-grid finance-summary">
          <article className="metric-card"><span>Entradas</span><strong>{currency.format(income)}</strong><small>Recebimentos confirmados</small></article>
          <article className="metric-card"><span>Saidas</span><strong>{currency.format(outcome)}</strong><small>Pagamentos e previsoes</small></article>
          <article className="metric-card"><span>Saldo</span><strong>{currency.format(income - outcome)}</strong><small>Resultado mockado</small></article>
        </section>
        <section className="workspace-grid">
          <form className="panel" onSubmit={submitTransaction}>
            <h3>Novo lancamento</h3>
            <input value={transactionForm.title} onChange={(event) => setTransactionForm((current) => ({ ...current, title: event.target.value }))} placeholder="Descricao" />
            <input type="number" value={transactionForm.amount} onChange={(event) => setTransactionForm((current) => ({ ...current, amount: event.target.value }))} />
            <select value={transactionForm.type} onChange={(event) => setTransactionForm((current) => ({ ...current, type: event.target.value }))}>
              <option>Receita</option>
              <option>Despesa</option>
            </select>
            <button className="primary-button" type="submit"><CreditCard size={18} /> Adicionar</button>
          </form>
          {renderRecordList('Lancamentos')}
        </section>
      </div>
    );
  }

  function renderAuthExperience() {
    if (!loggedProfile) {
      return (
        <section className="auth-layout">
          <form className="panel auth-card" onSubmit={login}>
            <div className="panel-heading"><h3>Entrar no ambiente</h3><ShieldCheck /></div>
            <input value={leadForm.email} onChange={(event) => setLeadForm((current) => ({ ...current, email: event.target.value }))} placeholder="admin@demo.com.br" />
            <input type="password" value={leadForm.message} onChange={(event) => setLeadForm((current) => ({ ...current, message: event.target.value }))} placeholder="Senha demo" />
            <button className="primary-button" type="submit"><LogIn size={18} /> Acessar</button>
          </form>
          <div className="panel">
            <h3>Perfis disponiveis</h3>
            {['Administrador', 'Financeiro', 'Atendimento'].map((role) => <button className="role-row" key={role} onClick={() => setLoggedProfile(role)}>{role}<ArrowRight size={17} /></button>)}
          </div>
        </section>
      );
    }
    return (
      <div className="experience-stack">
        <div className="session-banner"><ShieldCheck /> Sessao ativa como {loggedProfile}<button onClick={() => setLoggedProfile('')}>Sair</button></div>
        {renderDashboardExperience()}
      </div>
    );
  }

  function renderBlogExperience() {
    return (
      <section className="blog-layout">
        <div className="panel post-list">
          <label className="search-field"><Search size={18} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Pesquisar conteudo" /></label>
          {appData.posts.filter((post) => post.title.toLowerCase().includes(query.toLowerCase()) || post.category.toLowerCase().includes(query.toLowerCase())).map((post) => (
            <button className={'post-row ' + (post.id === selectedPost ? 'active' : '')} key={post.id} onClick={() => setSelectedPost(post.id)}>
              <strong>{post.title}</strong>
              <small>{post.category} · {post.readTime}</small>
            </button>
          ))}
        </div>
        <article className="panel article-panel">
          <span className="eyebrow">{selectedBlogPost.category}</span>
          <h2>{selectedBlogPost.title}</h2>
          <p>{selectedBlogPost.excerpt}</p>
          <p>{selectedBlogPost.body}</p>
          <form className="inline-form" onSubmit={submitLead}>
            <input value={leadForm.email} onChange={(event) => setLeadForm((current) => ({ ...current, email: event.target.value, name: current.name || 'Assinante' }))} placeholder="E-mail para newsletter" />
            <button className="primary-button" type="submit"><Mail size={18} /> Assinar</button>
          </form>
        </article>
      </section>
    );
  }

  function renderDeliveryExperience() {
    return (
      <div className="experience-stack">
        {renderCatalogExperience()}
        <section className="workspace-grid">
          {renderRecordList('Pedidos em andamento')}
          {renderRecordDetail('Detalhe do pedido')}
        </section>
      </div>
    );
  }

  function renderClinicExperience() {
    return (
      <div className="experience-stack">
        <section className="workspace-grid">
          {renderAppointmentForm()}
          {renderRecordDetail('Prontuario resumido')}
        </section>
        {renderRecordList('Pacientes e atendimentos')}
      </div>
    );
  }

  function renderExperience() {
    if (['marketing', 'landing', 'portfolio'].includes(appData.kind)) return renderMarketingExperience();
    if (['dashboard', 'reports'].includes(appData.kind)) return renderDashboardExperience();
    if (appData.kind === 'tickets') return renderOperationalExperience('Central de chamados');
    if (appData.kind === 'scheduler') return renderSchedulerExperience();
    if (appData.kind === 'inventory') return renderInventoryExperience();
    if (appData.kind === 'crm') return renderCrmExperience();
    if (appData.kind === 'chatbot') return renderChatbotExperience();
    if (appData.kind === 'email') return renderEmailExperience();
    if (appData.kind === 'serviceOrders') return renderOperationalExperience('Ordem de servico');
    if (appData.kind === 'catalog') return renderCatalogExperience();
    if (appData.kind === 'finance') return renderFinanceExperience();
    if (appData.kind === 'clients') return renderOperationalExperience('Relacionamento com clientes');
    if (appData.kind === 'auth') return renderAuthExperience();
    if (appData.kind === 'blog') return renderBlogExperience();
    if (appData.kind === 'condo') return renderOperationalExperience('Rotina do condominio');
    if (appData.kind === 'delivery') return renderDeliveryExperience();
    if (appData.kind === 'clinic') return renderClinicExperience();
    return renderDashboardExperience();
  }

  function renderSignatureSection() {
    return (
      <section className="signature-section">
        <div className="signature-copy">
          <span className="eyebrow">Pronto para virar proposta</span>
          <h2>Uma base com aparencia de produto, nao de rascunho.</h2>
          <p>{appData.differentialBullets[0]}</p>
          <div className="workflow-track">
            {appData.workflow.map((item) => (
              <span key={item.step}><strong>{item.step}</strong>{item.label}</span>
            ))}
          </div>
        </div>
        <div className="proof-grid">
          {appData.proofPoints.map((item) => (
            <article className="proof-card" key={item.title}>
              <CheckCircle2 size={20} />
              <strong>{item.title}</strong>
              <p>{item.text}</p>
            </article>
          ))}
          {appData.testimonials.map((testimonial) => (
            <blockquote className="testimonial-card" key={testimonial.name}>
              <p>"{testimonial.quote}"</p>
              <footer>{testimonial.name} · {testimonial.role}</footer>
            </blockquote>
          ))}
        </div>
      </section>
    );
  }

  return (
    <div className={shellClass} style={themeStyle}>
      <header className="topbar">
        <a className="brand" href="#top" aria-label={appData.brandName}>
          <span>{appData.brandName.slice(0, 1)}</span>
          <strong>{appData.brandName}</strong>
        </a>
        <nav>
          <a className="creator-link" href="https://www.linkedin.com/in/allison-joanine-ti" target="_blank" rel="noreferrer">by LogiCodem</a>
          <button onClick={scrollToWorkspace}>MVP</button>
          <button onClick={() => document.getElementById('escopo')?.scrollIntoView({ behavior: 'smooth' })}>Escopo</button>
          <button onClick={() => showToast('Contato comercial simulado.')}>Contato</button>
        </nav>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-copy">
            <span className="eyebrow">{appData.categoryTitle} · {appData.styleName}</span>
            <h1>{appData.optionTitle}</h1>
            <p>{appData.tagline}</p>
            <div className="hero-flow">
              {appData.workflow.map((item) => <span key={item.step}>{item.label}</span>)}
            </div>
            <div className="hero-actions">
              <button className="primary-button" onClick={scrollToWorkspace}><LayoutDashboard size={18} /> {appData.visual.cta}</button>
              <button className="secondary-button" onClick={() => showToast('Proposta comercial preparada.')}>Preparar proposta <ArrowRight size={18} /></button>
            </div>
            <div className="hero-proofline">
              {appData.proofPoints.slice(0, 3).map((point) => <span key={point.title}><CheckCircle2 size={16} />{point.title}</span>)}
            </div>
            <a className="logicodem-signature" href="https://www.linkedin.com/in/allison-joanine-ti" target="_blank" rel="noreferrer">
              <span>by</span>
              <strong>LogiCodem</strong>
              <small>Allison Joanine</small>
            </a>
            <div className="mini-metrics">
              {appData.metrics.slice(0, 3).map((metric) => <span key={metric.label}><strong>{metric.value}</strong>{metric.label}</span>)}
            </div>
          </div>
          <div className="hero-panel">
            <img src={appData.heroImage} alt="" />
            <div className="hero-panel-overlay" />
            <div className="hero-rail">
              <span><strong>{appData.records.length}</strong> registros ativos</span>
              <span><strong>{appData.metrics[1]?.value}</strong> indicador-chave</span>
            </div>
            {renderHeroPanel()}
          </div>
        </section>

        <section className="workspace-section" id="workspace">
          <div className="section-heading">
            <span className="eyebrow">Experiencia demonstravel</span>
            <h2>{appData.brandName} pronto para apresentacao</h2>
            <p>{appData.summary}</p>
          </div>
          {renderExperience()}
        </section>

        {renderSignatureSection()}

        <section className="scope-section" id="escopo">
          <div className="section-heading">
            <span className="eyebrow">Escopo comercial</span>
            <h2>O que este MVP entrega</h2>
          </div>
          <div className="scope-grid">
            {appData.scopeBullets.map((item) => <span key={item}><CheckCircle2 size={17} /> {item}</span>)}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a href="https://www.linkedin.com/in/allison-joanine-ti" target="_blank" rel="noreferrer">
          <span>by</span> <strong>LogiCodem</strong>
        </a>
      </footer>

      {toast && <div className="toast"><CheckCircle2 size={18} /> {toast}</div>}
    </div>
  );
}

function StatusPill({ status }: { status: string }) {
  return <span className={'status-pill status-' + status.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-')}>{status}</span>;
}

function StateBlock({ icon, title, text }: { icon: ReactNode; title: string; text: string }) {
  return (
    <div className="state-block">
      {icon}
      <strong>{title}</strong>
      <p>{text}</p>
    </div>
  );
}

export default App;
