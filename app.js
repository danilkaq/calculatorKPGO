const REGIONS = [
  {name:"Белгородская область",price:112190},{name:"Брянская область",price:100851},{name:"Владимирская область",price:105097},{name:"Воронежская область",price:110762},{name:"Ивановская область",price:94602},{name:"Калужская область",price:98918},{name:"Костромская область",price:84455},{name:"Курская область",price:133482},{name:"Липецкая область",price:98180},{name:"Московская область",price:208672},{name:"Орловская область",price:88088},{name:"Рязанская область",price:94863},{name:"Смоленская область",price:95811},{name:"Тамбовская область",price:76850},{name:"Тверская область",price:91308},{name:"Тульская область",price:107068},{name:"Ярославская область",price:103789},{name:"Город федерального значения Москва",price:229661},
  {name:"Республика Карелия (без учета части территории Республики Карелия, относящейся к сухопутным территориям Арктической зоны Российской Федерации)",price:117708},{name:"Республика Карелия (без учета части территории Республики Карелия, относящейся к сухопутным территориям Арктической зоны Российской Федерации)",price:120258},{name:"Часть территории Республики Карелия, относящаяся к сухопутным территориям Арктической зоны Российской Федерации",price:145558},{name:"Республика Коми (без учета части территории Республики Коми, относящейся к сухопутным территориям Арктической зоны Российской Федерации)",price:101868},{name:"Часть территории Республики Коми, относящаяся к сухопутным территориям Арктической зоны Российской Федерации",price:117902},{name:"Архангельская область (без учета части территории Архангельской области, относящейся к сухопутным территориям Арктической зоны Российской Федерации)",price:122550},{name:"Часть территории Архангельской области, относящаяся к сухопутным территориям Арктической зоны Российской Федерации",price:144209},{name:"Вологодская область",price:107111},{name:"Калининградская область",price:132685},{name:"Ленинградская область",price:165541},{name:"Мурманская область",price:153481},{name:"Новгородская область",price:99178},{name:"Псковская область",price:84735},{name:"Ненецкий автономный округ",price:134442},{name:"Город федерального значения Санкт-Петербург",price:165315},
  {name:"Республика Калмыкия",price:87459},{name:"Республика Адыгея (Адыгея)",price:124121},{name:"Республика Калмыкия",price:89448},{name:"Республика Крым",price:166309},{name:"Краснодарский край",price:149606},{name:"Астраханская область",price:109940},{name:"Волгоградская область",price:104005},{name:"Ростовская область",price:109478},{name:"Город федерального значения Севастополь",price:182443},{name:"Кабардино-Балкарская Республика",price:84540},{name:"Республика Дагестан",price:78829},{name:"Республика Ингушетия",price:61716},{name:"Кабардино-Балкарская Республика",price:85590},{name:"Карачаево-Черкесская Республика",price:91458},{name:"Республика Северная Осетия - Алания",price:97077},{name:"Чеченская Республика",price:88072},{name:"Ставропольский край",price:113845},
  {name:"Республика Татарстан (Татарстан)",price:170477},{name:"Республика Башкортостан",price:117628},{name:"Республика Марий Эл",price:98392},{name:"Республика Мордовия",price:101149},{name:"Республика Татарстан (Татарстан)",price:169604},{name:"Удмуртская Республика",price:118073},{name:"Чувашская Республика - Чувашия",price:108881},{name:"Пермский край",price:143265},{name:"Кировская область",price:107371},{name:"Нижегородская область",price:152244},{name:"Оренбургская область",price:95158},{name:"Пензенская область",price:92132},{name:"Самарская область",price:112825},{name:"Саратовская область",price:98099},{name:"Ульяновская область",price:105899},
  {name:"Ханты-Мансийский автономный округ - Югра (без учета части территории Ханты-Мансийского автономного округа - Югра, относящейся к сухопутным территориям Арктической зоны Российской Федерации)",price:116192},{name:"Курганская область",price:96579},{name:"Свердловская область",price:115025},{name:"Тюменская область",price:123530},{name:"Челябинская область",price:113829},{name:"Ханты-Мансийский автономный округ - Югра (без учета части территории Ханты-Мансийского автономного округа - Югра, относящейся к сухопутным территориям Арктической зоны Российской Федерации)",price:116250},{name:"Часть территории Ханты-Мансийского автономного округа - Югра, относящаяся к сухопутным территориям Арктической зоны Российской Федерации",price:127751},{name:"Ямало-Ненецкий автономный округ",price:193629},{name:"Часть территории Красноярского края, относящаяся к сухопутным территориям Арктической зоны Российской Федерации",price:144820},
  {name:"Республика Алтай",price:182758},{name:"Республика Тыва",price:140121},{name:"Республика Хакасия",price:111149},{name:"Алтайский край",price:116087},{name:"Красноярский край (без учета части территории Красноярского края, относящейся к сухопутным территориям Арктической зоны Российской Федерации)",price:118699},{name:"Часть территории Красноярского края, относящаяся к сухопутным территориям Арктической зоны Российской Федерации",price:147175},{name:"Иркутская область",price:126791},{name:"Кемеровская область - Кузбасс",price:112008},{name:"Новосибирская область",price:119646},{name:"Омская область",price:120272},{name:"Томская область",price:128088},
  {name:"Сахалинская область",price:194486},{name:"Республика Саха (Якутия)",price:166307},{name:"Камчатский край",price:179512},{name:"Приморский край",price:184478},{name:"Хабаровский край",price:168746},{name:"Амурская область",price:170803},{name:"Магаданская область",price:168320},{name:"Сахалинская область",price:197083},{name:"Еврейская автономная область",price:174073},{name:"Чукотский автономный округ",price:174073},{name:"Республика Бурятия",price:152506},{name:"Забайкальский край",price:178901},{name:"Луганская Народная Республика",price:123700},{name:"Донецкая Народная Республика",price:123700},{name:"Запорожская область",price:123700},{name:"Херсонская область",price:123700}
];

const qs = selector => document.querySelector(selector);
const qsa = selector => [...document.querySelectorAll(selector)];
const money = value => `${Math.round(value).toLocaleString("ru-RU")} ₽`;
const compactMoney = value => new Intl.NumberFormat("ru-RU", { notation: "compact", maximumFractionDigits: 1 }).format(value) + " ₽";
const percent = value => `${value.toFixed(3).replace(".", ",")} %`;

function initTypography() {
  const roots = [qs("header"), qs("main"), qs("footer")].filter(Boolean);
  const skip = new Set(["SCRIPT", "STYLE", "TEXTAREA", "INPUT", "SELECT", "OPTION", "OUTPUT", "CODE", "PRE"]);
  const shortWords = /(^|[\s(«])((?:в|во|к|ко|с|со|у|о|об|обо|от|ото|до|по|на|за|из|изо|без|для|при|под|подо|над|надо|перед|передо|через|между|и|а|но|да|или|либо|что|чтобы|как|же|бы|ли|не|ни|то|это|где|если|когда|пока|потому|поэтому|поскольку|также|вместе|его|её|ее|их|тот|та|те|этот|эта|эти|вашей))[ \t\r\n]+(?=\S)/giu;

  roots.forEach(root => {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    let node;
    while ((node = walker.nextNode())) nodes.push(node);

    nodes.forEach(textNode => {
      const parent = textNode.parentElement;
      if (!parent || skip.has(parent.tagName) || parent.closest("[data-no-typeset]")) return;
      let value = textNode.nodeValue
        .replace(/ПАО[\s\u00a0]+«Газпром»/gu, "ПАО\u00a0«Газпром»")
        .replace(/ПАО[\s\u00a0]+Газпром/gu, "ПАО\u00a0Газпром")
        .replace(/(Групп(?:а|ы|е|у|ой))[\s\u00a0]+Газпром/gu, "$1\u00a0Газпром");
      for (let pass = 0; pass < 12; pass += 1) {
        const nextValue = value.replace(shortWords, (_, lead, word) => `${lead}${word}\u00a0`);
        if (nextValue === value) break;
        value = nextValue;
      }
      textNode.nodeValue = value;
    });
  });
}

const form = qs("#mortgage-form");
const priceEl = qs("#price");
const downEl = qs("#downpayment");
const rateEl = qs("#rate");
const yearsEl = qs("#years");
const areaEl = qs("#area");
const regionEl = qs("#region");
const paymentTypeEl = qs("#payment-type");
const regionInfoEl = qs("#region-info");
const warningEl = qs("#warn-down");
let currentSchedule = [];

function populateRegions() {
  const fragment = document.createDocumentFragment();
  REGIONS.forEach(region => {
    const option = document.createElement("option");
    option.value = String(region.price);
    option.dataset.name = region.name;
    option.textContent = region.name;
    option.selected = region.name === "Брянская область";
    fragment.append(option);
  });
  regionEl.append(fragment);
}

function updateRange() {
  const progress = ((Number(rateEl.value) - Number(rateEl.min)) / (Number(rateEl.max) - Number(rateEl.min))) * 100;
  rateEl.style.setProperty("--range-progress", `${progress}%`);
  qs("#rate-badge").textContent = `${Number(rateEl.value).toFixed(1)}%`;
}

function validateInputs() {
  const price = Number(priceEl.value);
  const years = Number(yearsEl.value);
  let valid = true;
  qs("#price-error").textContent = "";
  qs("#years-error").textContent = "";
  if (!Number.isFinite(price) || price < 100000) {
    qs("#price-error").textContent = "Укажите стоимость объекта от 100 000 ₽";
    valid = false;
  }
  if (!Number.isFinite(years) || years < 1 || years > 30) {
    qs("#years-error").textContent = "Укажите срок от 1 до 30 лет";
    valid = false;
  }
  return valid;
}

function calculate() {
  if (!validateInputs()) return;

  const price = Number(priceEl.value);
  const minDown = price * 0.201;
  let down = Number(downEl.value) || 0;
  const warned = down < minDown;
  if (warned) down = minDown;
  warningEl.classList.toggle("show", warned);

  const annualRate = Number(rateEl.value) / 100;
  const years = Number(yearsEl.value);
  const months = years * 12;
  const monthlyRate = annualRate / 12;
  const loanSum = Math.max(0, price - down);
  const area = Number(areaEl.value) || 60;
  const selectedRegion = regionEl.options[regionEl.selectedIndex];
  const regionName = selectedRegion?.dataset.name || "";
  const regionPrice = Number(regionEl.value) || 0;
  const isCapital = regionName === "Город федерального значения Москва" || regionName === "Город федерального значения Санкт-Петербург";
  const coefficient = isCapital ? 1.8 : 1.2;
  const normCost = area * regionPrice * coefficient;
  const subsidyMonths = Math.min(months, 180);

  regionInfoEl.innerHTML = `Коэффициент: <strong>${coefficient}</strong> ${isCapital ? "(Москва/СПб)" : "(прочие регионы)"} · Норм. стоимость жилья: <strong>${money(normCost)}</strong> · Срок дотирования: <strong>${subsidyMonths} мес.</strong>`;

  const schedule = [];
  let totalPayment = 0;
  let totalInterest = 0;
  let totalSubsidy = 0;
  const subsidyLimit = month => {
    if (month > subsidyMonths) return 0;
    return Math.max(normCost * (annualRate * 100 / 1200) * (1 - (month - 1) / subsidyMonths), 0);
  };

  if (paymentTypeEl.value === "annuity") {
    const annuity = monthlyRate === 0 ? loanSum / months : loanSum * monthlyRate / (1 - Math.pow(1 + monthlyRate, -months));
    let balance = loanSum;
    for (let month = 1; month <= months; month += 1) {
      const interest = balance * monthlyRate;
      const principal = Math.min(annuity - interest, balance);
      const end = Math.max(balance - principal, 0);
      const limit = subsidyLimit(month);
      const employerComp = Math.min(limit, interest);
      const employeeExtra = Math.max(0, interest - limit);
      schedule.push({ n: month, start: balance, interest, principal, payment: annuity, end, limit, employerComp, employeeExtra, employeeTotal: principal + employeeExtra });
      totalPayment += annuity;
      totalInterest += interest;
      totalSubsidy += employerComp;
      balance = end;
    }
    qs("#r-monthly").textContent = money(annuity);
  } else {
    const principalPart = loanSum / months;
    let balance = loanSum;
    for (let month = 1; month <= months; month += 1) {
      const interest = balance * monthlyRate;
      const payment = principalPart + interest;
      const end = Math.max(balance - principalPart, 0);
      const limit = subsidyLimit(month);
      const employerComp = Math.min(limit, interest);
      const employeeExtra = Math.max(0, interest - limit);
      schedule.push({ n: month, start: balance, interest, principal: principalPart, payment, end, limit, employerComp, employeeExtra, employeeTotal: principalPart + employeeExtra });
      totalPayment += payment;
      totalInterest += interest;
      totalSubsidy += employerComp;
      balance = end;
    }
    qs("#r-monthly").textContent = `${money(schedule[0].payment)} → ${money(schedule.at(-1).payment)}`;
  }

  qs("#r-loan-sum").textContent = money(loanSum);
  qs("#r-down-fact").textContent = money(down);
  qs("#r-monthly-rate").textContent = percent(monthlyRate * 100);
  qs("#r-overpay").textContent = money(totalInterest);
  qs("#r-total").textContent = money(totalPayment);
  qs("#r-norm-cost").textContent = money(normCost);
  qs("#r-subsidy-total").textContent = money(totalSubsidy);
  qs("#r-employee-monthly").textContent = money(schedule[0]?.employeeTotal || 0);

  currentSchedule = schedule;
  renderTable(schedule);
  renderDonut(down, loanSum, totalInterest);
  renderLineChart(schedule);
}

function renderTable(schedule) {
  const tbody = qs("#schedule-table tbody");
  const fragment = document.createDocumentFragment();
  tbody.replaceChildren();
  schedule.forEach(row => {
    const tr = document.createElement("tr");
    [row.n, money(row.start), money(row.interest), money(row.principal), money(row.payment), money(row.end), money(row.limit), money(row.employerComp), money(row.employeeTotal)].forEach(value => {
      const td = document.createElement("td");
      td.textContent = String(value);
      tr.append(td);
    });
    fragment.append(tr);
  });
  tbody.append(fragment);
}

function renderDonut(down, loan, interest) {
  const total = down + loan + interest || 1;
  const p1 = down / total * 100;
  const p2 = p1 + loan / total * 100;
  qs("#payment-donut").style.background = `conic-gradient(var(--orange) 0 ${p1}%, var(--blue) ${p1}% ${p2}%, #435864 ${p2}% 100%)`;
  qs("#payment-donut").setAttribute("aria-label", `Первоначальный взнос ${money(down)}, сумма кредита ${money(loan)}, переплата по процентам ${money(interest)}`);
  qs("#donut-total").textContent = compactMoney(total);
  qs("#legend-down").textContent = money(down);
  qs("#legend-loan").textContent = money(loan);
  qs("#legend-interest").textContent = money(interest);
}

function renderLineChart(schedule) {
  const svg = qs("#line-chart");
  const ns = "http://www.w3.org/2000/svg";
  const width = 800;
  const height = 330;
  const margin = { top: 18, right: 26, bottom: 42, left: 72 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  const sampleStep = Math.max(1, Math.ceil(schedule.length / 72));
  const sampled = schedule.filter((_, index) => index % sampleStep === 0 || index === schedule.length - 1);
  const maxDebt = Math.max(...schedule.map(row => row.start), 1);
  const maxPayment = Math.max(...schedule.map(row => row.payment), 1);
  const x = index => margin.left + (index / Math.max(sampled.length - 1, 1)) * innerWidth;
  const yDebt = value => margin.top + innerHeight - (value / maxDebt) * innerHeight;
  const yPayment = value => margin.top + innerHeight - (value / maxPayment) * innerHeight;
  const make = (name, attrs = {}) => {
    const node = document.createElementNS(ns, name);
    Object.entries(attrs).forEach(([key, value]) => node.setAttribute(key, value));
    return node;
  };
  svg.replaceChildren();

  for (let line = 0; line <= 5; line += 1) {
    const y = margin.top + (line / 5) * innerHeight;
    svg.append(make("line", { x1: margin.left, x2: width - margin.right, y1: y, y2: y, class: "chart-grid-line" }));
    const label = make("text", { x: margin.left - 12, y: y + 4, "text-anchor": "end", class: "chart-axis-label" });
    label.textContent = compactMoney(maxDebt * (1 - line / 5)).replace(" ₽", "");
    svg.append(label);
  }

  [0, .25, .5, .75, 1].forEach(ratio => {
    const index = Math.min(Math.round((sampled.length - 1) * ratio), sampled.length - 1);
    const label = make("text", { x: x(index), y: height - 15, "text-anchor": "middle", class: "chart-axis-label" });
    label.textContent = sampled[index]?.n ?? "";
    svg.append(label);
  });

  const debtPoints = sampled.map((row, index) => `${x(index)},${yDebt(row.end)}`);
  const paymentPoints = sampled.map((row, index) => `${x(index)},${yPayment(row.payment)}`);
  const areaPath = `M${margin.left},${margin.top + innerHeight} L${debtPoints.join(" L")} L${width - margin.right},${margin.top + innerHeight} Z`;
  svg.append(make("path", { d: areaPath, class: "chart-debt-area" }));
  svg.append(make("polyline", { points: debtPoints.join(" "), class: "chart-debt-line" }));
  svg.append(make("polyline", { points: paymentPoints.join(" "), class: "chart-payment-line" }));
}

function exportCsv() {
  if (!currentSchedule.length) return;
  const header = "№;Остаток на начало;Проценты;Основной долг;Платёж;Остаток на конец;Лимит по %;Компенсация работодателя;Доплата из своих средств\n";
  const body = currentSchedule.map(row => [row.n, row.start, row.interest, row.principal, row.payment, row.end, row.limit, row.employerComp, row.employeeTotal].map(value => typeof value === "number" ? value.toFixed(2) : value).join(";")).join("\n");
  const blob = new Blob(["\ufeff", header, body], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "график_платежей.csv";
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function initMenu() {
  const toggle = qs(".menu-toggle");
  const nav = qs("#site-nav");
  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    nav.classList.toggle("open", !expanded);
  });
  nav.addEventListener("click", event => {
    if (event.target.matches("a")) {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

function initReveal() {
  const elements = qsa(".reveal");
  if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    elements.forEach(element => element.classList.add("visible"));
    return;
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: "0px 0px -8%", threshold: .08 });
  elements.forEach(element => observer.observe(element));
}

function initActiveNavigation() {
  if (!("IntersectionObserver" in window)) return;
  const links = new Map(qsa(".site-nav a").map(link => [link.getAttribute("href").slice(1), link]));
  const sections = [...links.keys()].map(id => document.getElementById(id)).filter(Boolean);
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(link => link.classList.remove("active"));
      links.get(entry.target.id)?.classList.add("active");
    });
  }, { rootMargin: "-35% 0px -55%", threshold: 0 });
  sections.forEach(section => observer.observe(section));
}

populateRegions();
updateRange();
initTypography();
initMenu();
initReveal();
initActiveNavigation();
calculate();

rateEl.addEventListener("input", updateRange);
form.addEventListener("submit", event => { event.preventDefault(); calculate(); });
qs("#export-csv").addEventListener("click", exportCsv);
qs("#back-to-top").addEventListener("click", event => {
  event.preventDefault();
  const root = document.documentElement;
  root.style.setProperty("scroll-behavior", "auto", "important");
  root.scrollTop = 0;
  document.body.scrollTop = 0;
  window.setTimeout(() => root.style.removeProperty("scroll-behavior"), 500);
});
[areaEl, regionEl, paymentTypeEl].forEach(element => element.addEventListener("change", calculate));
[priceEl, downEl, yearsEl].forEach(element => element.addEventListener("keydown", event => { if (event.key === "Enter") calculate(); }));
