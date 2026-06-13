import { AirportGraph } from "../airlineapp/airportgraph";
import { Country } from "../airport/country";
import { State } from "../airport/state";
import { City } from "../airport/city";
import { Airport } from "../airport/airport";
import { Terminal } from "../airport/terminal";
import { Gate } from "../airport/gate";
import { Airplane } from "../flight/airplane";
import { Flight } from "../flight/flight";
import { Employee } from "../user/employee";

// ═══════════════════════════════════════════════════════════════
// COUNTRIES
// ═══════════════════════════════════════════════════════════════
export const panama       = new Country(1,  "Panamá");
export const costaRica    = new Country(2,  "Costa Rica");
export const colombia     = new Country(3,  "Colombia");
export const usa          = new Country(4,  "Estados Unidos");
export const mexico       = new Country(5,  "México");
export const peru         = new Country(6,  "Perú");
export const argentina    = new Country(7,  "Argentina");
export const brazil       = new Country(8,  "Brasil");
export const chile        = new Country(9,  "Chile");
export const dominicanRep = new Country(10, "República Dominicana");
export const ecuador      = new Country(11, "Ecuador");
export const venezuela    = new Country(12, "Venezuela");
export const spain        = new Country(13, "España");

// ═══════════════════════════════════════════════════════════════
// STATES / PROVINCES
// ═══════════════════════════════════════════════════════════════
export const panamaProv      = new State(1,  "Panamá",               panama);
export const alajuela        = new State(2,  "Alajuela",             costaRica);
export const cundinamarca    = new State(3,  "Cundinamarca",         colombia);
export const antioquia       = new State(4,  "Antioquia",            colombia);
export const florida         = new State(5,  "Florida",              usa);
export const newYorkState    = new State(6,  "Nueva York",           usa);
export const texas           = new State(7,  "Texas",                usa);
export const cdmxState       = new State(8,  "Ciudad de México",     mexico);
export const limaState       = new State(9,  "Lima",                 peru);
export const buenosAiresProv = new State(10, "Buenos Aires",         argentina);
export const saoPauloState   = new State(11, "São Paulo",            brazil);
export const santiagoState   = new State(12, "Región Metropolitana", chile);
export const sdqProv         = new State(13, "Santo Domingo",        dominicanRep);
export const pichincha       = new State(14, "Pichincha",            ecuador);
export const madridState     = new State(15, "Comunidad de Madrid",  spain);
export const caracasState    = new State(16, "Distrito Capital",     venezuela);

// ═══════════════════════════════════════════════════════════════
// CITIES
// ═══════════════════════════════════════════════════════════════
export const tocumen         = new City(1,  "Tocumen",          panamaProv);
export const rioSegundo      = new City(2,  "Río Segundo",      alajuela);
export const bogotaCity      = new City(3,  "Bogotá",           cundinamarca);
export const medellinCity    = new City(4,  "Medellín",         antioquia);
export const miamiCity       = new City(5,  "Miami",            florida);
export const newYorkCity     = new City(6,  "Nueva York",       newYorkState);
export const houstonCity     = new City(7,  "Houston",          texas);
export const cdmxCity        = new City(8,  "Ciudad de México", cdmxState);
export const limaCity        = new City(9,  "Lima",             limaState);
export const buenosAiresCity = new City(10, "Buenos Aires",     buenosAiresProv);
export const saoPauloCity    = new City(11, "Guarulhos",        saoPauloState);
export const santiagoCity    = new City(12, "Pudahuel",         santiagoState);
export const sdqCity         = new City(13, "Santo Domingo",    sdqProv);
export const quitoCity       = new City(14, "Tababela",         pichincha);
export const madridCity      = new City(15, "Madrid",           madridState);
export const caracasCity     = new City(16, "Maiquetía",        caracasState);

// ═══════════════════════════════════════════════════════════════
// GATES  (reales o basados en layouts oficiales publicados)
// ═══════════════════════════════════════════════════════════════

// ── PTY · Terminal 2 Copa Airlines (inaugurada 2019) ─────────
// Concourse A (gates pares, lado norte)
export const ptyA2  = new Gate(1,  "A2");  export const ptyA4  = new Gate(2,  "A4");
export const ptyA6  = new Gate(3,  "A6");  export const ptyA8  = new Gate(4,  "A8");
export const ptyA10 = new Gate(5,  "A10"); export const ptyA12 = new Gate(6,  "A12");
// Concourse B
export const ptyB1  = new Gate(7,  "B1");  export const ptyB3  = new Gate(8,  "B3");
export const ptyB5  = new Gate(9,  "B5");  export const ptyB7  = new Gate(10, "B7");
export const ptyB9  = new Gate(11, "B9");  export const ptyB11 = new Gate(12, "B11");
// Concourse C
export const ptyC2  = new Gate(13, "C2");  export const ptyC4  = new Gate(14, "C4");
export const ptyC6  = new Gate(15, "C6");  export const ptyC8  = new Gate(16, "C8");

// ── SJO · Terminal Internacional (layout oficial ACI) ────────
export const sjo3   = new Gate(17, "3");   export const sjo4   = new Gate(18, "4");
export const sjo5   = new Gate(19, "5");   export const sjo6   = new Gate(20, "6");
export const sjo7   = new Gate(21, "7");   export const sjo8   = new Gate(22, "8");

// ── BOG · Terminal Internacional El Dorado ───────────────────
// Sala Internacional puertas 20-40 (numeración real Opain)
export const bog20  = new Gate(23, "20");  export const bog22  = new Gate(24, "22");
export const bog24  = new Gate(25, "24");  export const bog26  = new Gate(26, "26");
export const bog28  = new Gate(27, "28");  export const bog30  = new Gate(28, "30");

// ── MDE · Terminal Internacional José María Córdova ──────────
export const mde10  = new Gate(29, "10");  export const mde11  = new Gate(30, "11");
export const mde12  = new Gate(31, "12");  export const mde13  = new Gate(32, "13");

// ── MIA · Miami International · Concourse D (Copa) ───────────
export const miaD6  = new Gate(33, "D6");  export const miaD7  = new Gate(34, "D7");
export const miaD8  = new Gate(35, "D8");  export const miaD9  = new Gate(36, "D9");
export const miaD10 = new Gate(37, "D10"); export const miaD30 = new Gate(38, "D30");

// ── JFK · Terminal 4 (Copa Airlines) ─────────────────────────
export const jfkB2  = new Gate(39, "B2");  export const jfkB4  = new Gate(40, "B4");
export const jfkB6  = new Gate(41, "B6");  export const jfkB20 = new Gate(42, "B20");

// ── IAH · Terminal D Internacional (Copa) ────────────────────
export const iahD7  = new Gate(43, "D7");  export const iahD8  = new Gate(44, "D8");
export const iahD9  = new Gate(45, "D9");  export const iahD10 = new Gate(46, "D10");

// ── MEX · Terminal 1 (Star Alliance / Copa) ──────────────────
export const mexF1  = new Gate(47, "F1");  export const mexF2  = new Gate(48, "F2");
export const mexF3  = new Gate(49, "F3");  export const mexF4  = new Gate(50, "F4");

// ── LIM · Terminal Internacional Jorge Chávez ────────────────
export const lim20  = new Gate(51, "20");  export const lim21  = new Gate(52, "21");
export const lim22  = new Gate(53, "22");  export const lim23  = new Gate(54, "23");

// ── EZE · Terminal A Internacional ───────────────────────────
export const ezeA4  = new Gate(55, "A4");  export const ezeA6  = new Gate(56, "A6");
export const ezeA8  = new Gate(57, "A8");  export const ezeA10 = new Gate(58, "A10");

// ── GRU · Terminal 3 Internacional ───────────────────────────
export const gruT3G1 = new Gate(59, "310"); export const gruT3G2 = new Gate(60, "311");
export const gruT3G3 = new Gate(61, "312"); export const gruT3G4 = new Gate(62, "313");

// ── SCL · Terminal Internacional ─────────────────────────────
export const sclI1  = new Gate(63, "I-1"); export const sclI2  = new Gate(64, "I-2");
export const sclI3  = new Gate(65, "I-3"); export const sclI4  = new Gate(66, "I-4");

// ── SDQ · Terminal B Internacional ───────────────────────────
export const sdqB1  = new Gate(67, "B1");  export const sdqB2  = new Gate(68, "B2");
export const sdqB3  = new Gate(69, "B3");

// ── UIO · Terminal Internacional Mariscal Sucre (Tababela) ───
export const uio101 = new Gate(70, "101"); export const uio102 = new Gate(71, "102");
export const uio103 = new Gate(72, "103");

// ── MAD · Terminal T1 (Star Alliance) ────────────────────────
export const madM1  = new Gate(73, "M1");  export const madM2  = new Gate(74, "M2");
export const madM3  = new Gate(75, "M3");  export const madM4  = new Gate(76, "M4");
export const madM5  = new Gate(77, "M5");

// ── CCS · Terminal Internacional C ───────────────────────────
export const ccsC1  = new Gate(78, "C1");  export const ccsC2  = new Gate(79, "C2");
export const ccsC3  = new Gate(80, "C3");

// ═══════════════════════════════════════════════════════════════
// TERMINALS  (nombres oficiales)
// ═══════════════════════════════════════════════════════════════

// PTY — Terminal 2 "Copa Hub" (única terminal internacional de Copa)
export const ptyT2 = new Terminal(1, "Terminal 2");
ptyT2.addGate(ptyA2);  ptyT2.addGate(ptyA4);  ptyT2.addGate(ptyA6);  ptyT2.addGate(ptyA8);
ptyT2.addGate(ptyA10); ptyT2.addGate(ptyA12);
ptyT2.addGate(ptyB1);  ptyT2.addGate(ptyB3);  ptyT2.addGate(ptyB5);  ptyT2.addGate(ptyB7);
ptyT2.addGate(ptyB9);  ptyT2.addGate(ptyB11);
ptyT2.addGate(ptyC2);  ptyT2.addGate(ptyC4);  ptyT2.addGate(ptyC6);  ptyT2.addGate(ptyC8);

// SJO — única terminal
export const sjoTerm = new Terminal(2, "Terminal Internacional");
sjoTerm.addGate(sjo3); sjoTerm.addGate(sjo4); sjoTerm.addGate(sjo5);
sjoTerm.addGate(sjo6); sjoTerm.addGate(sjo7); sjoTerm.addGate(sjo8);

// BOG — Terminal Internacional El Dorado
export const bogT1 = new Terminal(3, "Terminal Internacional El Dorado");
bogT1.addGate(bog20); bogT1.addGate(bog22); bogT1.addGate(bog24);
bogT1.addGate(bog26); bogT1.addGate(bog28); bogT1.addGate(bog30);

// MDE — única terminal
export const mdeTerm = new Terminal(4, "Terminal Internacional");
mdeTerm.addGate(mde10); mdeTerm.addGate(mde11); mdeTerm.addGate(mde12); mdeTerm.addGate(mde13);

// MIA — Concourse D
export const miaConcD = new Terminal(5, "Concourse D");
miaConcD.addGate(miaD6); miaConcD.addGate(miaD7); miaConcD.addGate(miaD8);
miaConcD.addGate(miaD9); miaConcD.addGate(miaD10); miaConcD.addGate(miaD30);

// JFK — Terminal 4
export const jfkT4 = new Terminal(6, "Terminal 4");
jfkT4.addGate(jfkB2); jfkT4.addGate(jfkB4); jfkT4.addGate(jfkB6); jfkT4.addGate(jfkB20);

// IAH — Terminal D Internacional
export const iahTD = new Terminal(7, "Terminal D");
iahTD.addGate(iahD7); iahTD.addGate(iahD8); iahTD.addGate(iahD9); iahTD.addGate(iahD10);

// MEX — Terminal 1 Sala F (Star Alliance)
export const mexT1 = new Terminal(8, "Terminal 1");
mexT1.addGate(mexF1); mexT1.addGate(mexF2); mexT1.addGate(mexF3); mexT1.addGate(mexF4);

// LIM — única terminal internacional
export const limTerm = new Terminal(9, "Terminal Internacional");
limTerm.addGate(lim20); limTerm.addGate(lim21); limTerm.addGate(lim22); limTerm.addGate(lim23);

// EZE — Terminal A Internacional
export const ezeTA = new Terminal(10, "Terminal A");
ezeTA.addGate(ezeA4); ezeTA.addGate(ezeA6); ezeTA.addGate(ezeA8); ezeTA.addGate(ezeA10);

// GRU — Terminal 3 Internacional
export const gruT3 = new Terminal(11, "Terminal 3");
gruT3.addGate(gruT3G1); gruT3.addGate(gruT3G2); gruT3.addGate(gruT3G3); gruT3.addGate(gruT3G4);

// SCL — Terminal Internacional
export const sclTI = new Terminal(12, "Terminal Internacional");
sclTI.addGate(sclI1); sclTI.addGate(sclI2); sclTI.addGate(sclI3); sclTI.addGate(sclI4);

// SDQ — Terminal B Internacional
export const sdqTB = new Terminal(13, "Terminal B");
sdqTB.addGate(sdqB1); sdqTB.addGate(sdqB2); sdqTB.addGate(sdqB3);

// UIO — única terminal (aeropuerto Tababela)
export const uioTerm = new Terminal(14, "Terminal Internacional");
uioTerm.addGate(uio101); uioTerm.addGate(uio102); uioTerm.addGate(uio103);

// MAD — Terminal T1 (Star Alliance)
export const madT1 = new Terminal(15, "Terminal T1");
madT1.addGate(madM1); madT1.addGate(madM2); madT1.addGate(madM3);
madT1.addGate(madM4); madT1.addGate(madM5);

// CCS — Terminal C Internacional
export const ccsTI = new Terminal(16, "Terminal C");
ccsTI.addGate(ccsC1); ccsTI.addGate(ccsC2); ccsTI.addGate(ccsC3);

// ═══════════════════════════════════════════════════════════════
// AIRPORTS
// ═══════════════════════════════════════════════════════════════
export const pty = new Airport(1,  "Aeropuerto Internacional de Tocumen (PTY)",                  tocumen,         [], []);
pty.addTerminal(ptyT2);

export const sjo = new Airport(2,  "Aeropuerto Internacional Juan Santamaría (SJO)",             rioSegundo,      [], []);
sjo.addTerminal(sjoTerm);

export const bog = new Airport(3,  "Aeropuerto Internacional El Dorado (BOG)",                   bogotaCity,      [], []);
bog.addTerminal(bogT1);

export const mde = new Airport(4,  "Aeropuerto Internacional José María Córdova (MDE)",          medellinCity,    [], []);
mde.addTerminal(mdeTerm);

export const mia = new Airport(5,  "Aeropuerto Internacional de Miami (MIA)",                    miamiCity,       [], []);
mia.addTerminal(miaConcD);

export const jfk = new Airport(6,  "Aeropuerto Internacional John F. Kennedy (JFK)",             newYorkCity,     [], []);
jfk.addTerminal(jfkT4);

export const iah = new Airport(7,  "Aeropuerto Internacional George Bush (IAH)",                 houstonCity,     [], []);
iah.addTerminal(iahTD);

export const mex = new Airport(8,  "Aeropuerto Internacional Benito Juárez (MEX)",               cdmxCity,        [], []);
mex.addTerminal(mexT1);

export const lim = new Airport(9,  "Aeropuerto Internacional Jorge Chávez (LIM)",                limaCity,        [], []);
lim.addTerminal(limTerm);

export const eze = new Airport(10, "Aeropuerto Internacional Ministro Pistarini (EZE)",          buenosAiresCity, [], []);
eze.addTerminal(ezeTA);

export const gru = new Airport(11, "Aeropuerto Internacional de Guarulhos (GRU)",                saoPauloCity,    [], []);
gru.addTerminal(gruT3);

export const scl = new Airport(12, "Aeropuerto Internacional Arturo Merino Benítez (SCL)",       santiagoCity,    [], []);
scl.addTerminal(sclTI);

export const sdq = new Airport(13, "Aeropuerto Internacional Las Américas (SDQ)",                sdqCity,         [], []);
sdq.addTerminal(sdqTB);

export const uio = new Airport(14, "Aeropuerto Internacional Mariscal Sucre (UIO)",              quitoCity,       [], []);
uio.addTerminal(uioTerm);

export const mad = new Airport(15, "Aeropuerto Internacional Adolfo Suárez Madrid-Barajas (MAD)",madridCity,      [], []);
mad.addTerminal(madT1);

export const ccs = new Airport(16, "Aeropuerto Internacional Simón Bolívar (CCS)",               caracasCity,     [], []);
ccs.addTerminal(ccsTI);

// ═══════════════════════════════════════════════════════════════
// AIRPLANES  (flota real de Copa Airlines a 2026)
// ═══════════════════════════════════════════════════════════════
export const b737_800_1  = new Airplane(1,  "Boeing 737-800",   160);
export const b737_800_2  = new Airplane(2,  "Boeing 737-800",   160);
export const b737Max9_1  = new Airplane(3,  "Boeing 737 MAX 9", 178);
export const b737Max9_2  = new Airplane(4,  "Boeing 737 MAX 9", 178);
export const b737Max9_3  = new Airplane(5,  "Boeing 737 MAX 9", 178);
export const b737Max8_1  = new Airplane(6,  "Boeing 737 MAX 8", 166);
export const b737Max8_2  = new Airplane(7,  "Boeing 737 MAX 8", 166);
export const b777_200_1  = new Airplane(8,  "Boeing 777-200ER", 301);
export const b787_9_1    = new Airplane(9,  "Boeing 787-9",     296);
export const b787_9_2    = new Airplane(10, "Boeing 787-9",     296);

// ═══════════════════════════════════════════════════════════════
// EMPLOYEES  (ficticios)
// ═══════════════════════════════════════════════════════════════

// Captains
export const cap1  = new Employee(1,  "Captain", 1,  "Carlos",    "Mendoza",    new Date(1970, 3,  12), "PA001001");
export const cap2  = new Employee(2,  "Captain", 2,  "Roberto",   "Fuentes",    new Date(1968, 7,  22), "PA002002");
export const cap3  = new Employee(3,  "Captain", 3,  "Fernando",  "Castillo",   new Date(1972, 1,  5),  "PA003003");
export const cap4  = new Employee(4,  "Captain", 4,  "Miguel",    "Arias",      new Date(1975, 9,  18), "PA004004");
export const cap5  = new Employee(5,  "Captain", 5,  "Alejandro", "Mora",       new Date(1969, 5,  30), "PA005005");
export const cap6  = new Employee(6,  "Captain", 6,  "Raúl",      "Vargas",     new Date(1971, 2,  14), "PA006006");
export const cap7  = new Employee(7,  "Captain", 7,  "Jorge",     "Medina",     new Date(1973, 8,  7),  "PA007007");
export const cap8  = new Employee(8,  "Captain", 8,  "Ernesto",   "Salazar",    new Date(1967, 11, 25), "PA008008");

// Copilots
export const cop1  = new Employee(9,  "Copilot", 9,  "Andrés",    "Rojas",      new Date(1985, 2,  14), "PA009009");
export const cop2  = new Employee(10, "Copilot", 10, "Diego",     "Herrera",    new Date(1987, 6,  9),  "PA010010");
export const cop3  = new Employee(11, "Copilot", 11, "Luis",      "Sandoval",   new Date(1983, 11, 25), "PA011011");
export const cop4  = new Employee(12, "Copilot", 12, "Javier",    "Vega",       new Date(1986, 4,  3),  "PA012012");
export const cop5  = new Employee(13, "Copilot", 13, "Pablo",     "Torres",     new Date(1984, 8,  17), "PA013013");
export const cop6  = new Employee(14, "Copilot", 14, "Sebastián", "Núñez",      new Date(1988, 0,  21), "PA014014");
export const cop7  = new Employee(15, "Copilot", 15, "Nicolás",   "Pereira",    new Date(1990, 3,  8),  "PA015015");
export const cop8  = new Employee(16, "Copilot", 16, "Mateo",     "Guerrero",   new Date(1989, 7,  30), "PA016016");

// Flight Engineers (solo vuelos de largo alcance en 787/777)
export const eng1  = new Employee(17, "Flight Engineer", 17, "Ricardo",  "Peña",     new Date(1978, 8,  14), "PA017017");
export const eng2  = new Employee(18, "Flight Engineer", 18, "Sergio",   "Lozano",   new Date(1980, 3,  27), "PA018018");
export const eng3  = new Employee(19, "Flight Engineer", 19, "Marcos",   "Rivas",    new Date(1976, 6,  5),  "PA019019");

// Pursers
export const pur1  = new Employee(20, "Purser", 20, "María",    "González",   new Date(1982, 0,  20), "PA020020");
export const pur2  = new Employee(21, "Purser", 21, "Carmen",   "Jiménez",    new Date(1980, 10, 7),  "PA021021");
export const pur3  = new Employee(22, "Purser", 22, "Isabel",   "Ramírez",    new Date(1983, 3,  15), "PA022022");
export const pur4  = new Employee(23, "Purser", 23, "Patricia", "Soto",       new Date(1981, 7,  22), "PA023023");
export const pur5  = new Employee(24, "Purser", 24, "Gloria",   "Cabrera",    new Date(1979, 5,  11), "PA024024");
export const pur6  = new Employee(25, "Purser", 25, "Rosa",     "Mendoza",    new Date(1984, 9,  3),  "PA025025");

// Stewardesses
export const stew1  = new Employee(26, "Stewardess", 26, "Lucía",     "Vargas",    new Date(1990, 1,  5),  "PA026026");
export const stew2  = new Employee(27, "Stewardess", 27, "Sofía",     "Mora",      new Date(1992, 9,  18), "PA027027");
export const stew3  = new Employee(28, "Stewardess", 28, "Valentina", "Cruz",      new Date(1991, 5,  22), "PA028028");
export const stew4  = new Employee(29, "Stewardess", 29, "Daniela",   "Reyes",     new Date(1993, 7,  11), "PA029029");
export const stew5  = new Employee(30, "Stewardess", 30, "Andrea",    "Flores",    new Date(1989, 2,  28), "PA030030");
export const stew6  = new Employee(31, "Stewardess", 31, "Camila",    "Ortega",    new Date(1994, 11, 3),  "PA031031");
export const stew7  = new Employee(32, "Stewardess", 32, "Paula",     "Méndez",    new Date(1988, 6,  16), "PA032032");
export const stew8  = new Employee(33, "Stewardess", 33, "Laura",     "Aguilar",   new Date(1995, 4,  9),  "PA033033");
export const stew9  = new Employee(34, "Stewardess", 34, "Carolina",  "Ríos",      new Date(1991, 8,  14), "PA034034");
export const stew10 = new Employee(35, "Stewardess", 35, "Fernanda",  "Pizarro",   new Date(1993, 2,  27), "PA035035");
export const stew11 = new Employee(36, "Stewardess", 36, "Alejandra", "Muñoz",     new Date(1990, 11, 1),  "PA036036");
export const stew12 = new Employee(37, "Stewardess", 37, "Natalia",   "Correa",    new Date(1992, 4,  19), "PA037037");
export const stew13 = new Employee(38, "Stewardess", 38, "Mariana",   "Espinosa",  new Date(1989, 7,  8),  "PA038038");
export const stew14 = new Employee(39, "Stewardess", 39, "Gabriela",  "Romero",    new Date(1994, 0,  23), "PA039039");
export const stew15 = new Employee(40, "Stewardess", 40, "Verónica",  "Suárez",    new Date(1987, 10, 15), "PA040040");
export const stew16 = new Employee(41, "Stewardess", 41, "Mónica",    "Villalba",  new Date(1991, 3,  30), "PA041041");

// ═══════════════════════════════════════════════════════════════
// FLIGHTS
// Tripulación mínima por tipo:
//   Corto  < 3h  : cap + cop + pur + 3 stews  (6 personas)
//   Medio  3–7h  : cap + cop + pur + 4 stews  (7 personas)
//   Largo  > 7h  : cap + cop + eng + pur + 6 stews (10 personas)
//
// Diversidad de rutas:
//   (A) Solo ida desde PTY
//   (B) Ida + vuelta (ambos sentidos presentes en el dataset)
//   (C) Solo llegada a PTY (vuelo que opera otra aerolínea / codeshare)
// ═══════════════════════════════════════════════════════════════

// ── 15 DIC 2026 ───────────────────────────────────────────────

// CM841  PTY→SJO  07:30–08:45  1h15m  corto  (B: tiene retorno CM302 el mismo día)
export const flightCM841 = new Flight(1, "CM841", pty, sjo,
    new Date(2026, 11, 15, 7, 30), new Date(2026, 11, 15, 8, 45),
    [], "Scheduled", b737_800_1);
flightCM841.addEmployee(cap1); flightCM841.addEmployee(cop1);
flightCM841.addEmployee(pur1); flightCM841.addEmployee(stew1); flightCM841.addEmployee(stew2); flightCM841.addEmployee(stew3);
pty.addFlight(flightCM841);

// CM302  SJO→PTY  11:00–12:15  1h15m  corto  (retorno de CM841)
export const flightCM302 = new Flight(2, "CM302", sjo, pty,
    new Date(2026, 11, 15, 11, 0), new Date(2026, 11, 15, 12, 15),
    [], "Scheduled", b737_800_1);
flightCM302.addEmployee(cap1); flightCM302.addEmployee(cop1);
flightCM302.addEmployee(pur1); flightCM302.addEmployee(stew1); flightCM302.addEmployee(stew2); flightCM302.addEmployee(stew3);
sjo.addFlight(flightCM302);

// CM707  PTY→MIA  09:30–13:00  3h30m  medio  (B: tiene retorno CM708 al día siguiente)
export const flightCM707 = new Flight(3, "CM707", pty, mia,
    new Date(2026, 11, 15, 9, 30), new Date(2026, 11, 15, 13, 0),
    [], "Scheduled", b777_200_1);
flightCM707.addEmployee(cap2); flightCM707.addEmployee(cop2);
flightCM707.addEmployee(pur2); flightCM707.addEmployee(stew4); flightCM707.addEmployee(stew5); flightCM707.addEmployee(stew6); flightCM707.addEmployee(stew7);
pty.addFlight(flightCM707);

// CM403  PTY→BOG  14:00–15:50  1h50m  corto  (A: solo ida en este dataset)
export const flightCM403 = new Flight(4, "CM403", pty, bog,
    new Date(2026, 11, 15, 14, 0), new Date(2026, 11, 15, 15, 50),
    [], "Scheduled", b737Max8_1);
flightCM403.addEmployee(cap3); flightCM403.addEmployee(cop3);
flightCM403.addEmployee(pur3); flightCM403.addEmployee(stew8); flightCM403.addEmployee(stew9); flightCM403.addEmployee(stew10);
pty.addFlight(flightCM403);

// CM480  PTY→CCS  16:30–18:20  1h50m  corto  (A: solo ida)
export const flightCM480 = new Flight(5, "CM480", pty, ccs,
    new Date(2026, 11, 15, 16, 30), new Date(2026, 11, 15, 18, 20),
    [], "Scheduled", b737Max9_1);
flightCM480.addEmployee(cap4); flightCM480.addEmployee(cop4);
flightCM480.addEmployee(pur4); flightCM480.addEmployee(stew11); flightCM480.addEmployee(stew12); flightCM480.addEmployee(stew13);
pty.addFlight(flightCM480);

// ── 16 DIC 2026 ───────────────────────────────────────────────

// CM708  MIA→PTY  08:00–11:30  3h30m  medio  (retorno de CM707)
export const flightCM708 = new Flight(6, "CM708", mia, pty,
    new Date(2026, 11, 16, 8, 0), new Date(2026, 11, 16, 11, 30),
    [], "Scheduled", b777_200_1);
flightCM708.addEmployee(cap2); flightCM708.addEmployee(cop2);
flightCM708.addEmployee(pur2); flightCM708.addEmployee(stew4); flightCM708.addEmployee(stew5); flightCM708.addEmployee(stew6); flightCM708.addEmployee(stew7);
mia.addFlight(flightCM708);

// CM443  PTY→MDE  09:00–10:40  1h40m  corto  (A: solo ida)
export const flightCM443 = new Flight(7, "CM443", pty, mde,
    new Date(2026, 11, 16, 9, 0), new Date(2026, 11, 16, 10, 40),
    [], "Scheduled", b737_800_2);
flightCM443.addEmployee(cap5); flightCM443.addEmployee(cop5);
flightCM443.addEmployee(pur5); flightCM443.addEmployee(stew14); flightCM443.addEmployee(stew15); flightCM443.addEmployee(stew16);
pty.addFlight(flightCM443);

// CM321  PTY→JFK  10:00–16:00  6h00m  medio  (B: tiene retorno CM322 el 18)
export const flightCM321 = new Flight(8, "CM321", pty, jfk,
    new Date(2026, 11, 16, 10, 0), new Date(2026, 11, 16, 16, 0),
    [], "Scheduled", b787_9_1);
flightCM321.addEmployee(cap6); flightCM321.addEmployee(cop6);
flightCM321.addEmployee(pur6); flightCM321.addEmployee(stew1); flightCM321.addEmployee(stew2); flightCM321.addEmployee(stew8); flightCM321.addEmployee(stew9);
pty.addFlight(flightCM321);

// CM021  PTY→EZE  23:00–07:30+1  8h30m  largo  (A: solo ida en este dataset)
export const flightCM021 = new Flight(9, "CM021", pty, eze,
    new Date(2026, 11, 16, 23, 0), new Date(2026, 11, 17, 7, 30),
    [], "Scheduled", b787_9_2);
flightCM021.addEmployee(cap7); flightCM021.addEmployee(cop7);
flightCM021.addEmployee(eng1); flightCM021.addEmployee(pur1);
flightCM021.addEmployee(stew3); flightCM021.addEmployee(stew4); flightCM021.addEmployee(stew10); flightCM021.addEmployee(stew11); flightCM021.addEmployee(stew12); flightCM021.addEmployee(stew13);
pty.addFlight(flightCM021);

// ── 17 DIC 2026 ───────────────────────────────────────────────

// CM610  PTY→MEX  08:30–12:00  3h30m  medio  (B: tiene retorno CM611 el 19)
export const flightCM610 = new Flight(10, "CM610", pty, mex,
    new Date(2026, 11, 17, 8, 30), new Date(2026, 11, 17, 12, 0),
    [], "Scheduled", b737Max9_2);
flightCM610.addEmployee(cap8); flightCM610.addEmployee(cop8);
flightCM610.addEmployee(pur2); flightCM610.addEmployee(stew5); flightCM610.addEmployee(stew6); flightCM610.addEmployee(stew14); flightCM610.addEmployee(stew15);
pty.addFlight(flightCM610);

// CM270  PTY→LIM  14:00–18:30  4h30m  medio  (A: solo ida)
export const flightCM270 = new Flight(11, "CM270", pty, lim,
    new Date(2026, 11, 17, 14, 0), new Date(2026, 11, 17, 18, 30),
    [], "Scheduled", b737Max8_2);
flightCM270.addEmployee(cap1); flightCM270.addEmployee(cop1);
flightCM270.addEmployee(pur3); flightCM270.addEmployee(stew7); flightCM270.addEmployee(stew8); flightCM270.addEmployee(stew9); flightCM270.addEmployee(stew16);
pty.addFlight(flightCM270);

// CM062  PTY→GRU  22:00–06:00+1  8h00m  largo  (A: solo ida)
export const flightCM062 = new Flight(12, "CM062", pty, gru,
    new Date(2026, 11, 17, 22, 0), new Date(2026, 11, 18, 6, 0),
    [], "Scheduled", b787_9_1);
flightCM062.addEmployee(cap2); flightCM062.addEmployee(cop2);
flightCM062.addEmployee(eng2); flightCM062.addEmployee(pur4);
flightCM062.addEmployee(stew1); flightCM062.addEmployee(stew2); flightCM062.addEmployee(stew3); flightCM062.addEmployee(stew10); flightCM062.addEmployee(stew11); flightCM062.addEmployee(stew12);
pty.addFlight(flightCM062);

// ── 18 DIC 2026 ───────────────────────────────────────────────

// CM500  PTY→IAH  09:00–13:30  4h30m  medio  (A: solo ida)
export const flightCM500 = new Flight(13, "CM500", pty, iah,
    new Date(2026, 11, 18, 9, 0), new Date(2026, 11, 18, 13, 30),
    [], "Scheduled", b737Max9_3);
flightCM500.addEmployee(cap3); flightCM500.addEmployee(cop3);
flightCM500.addEmployee(pur5); flightCM500.addEmployee(stew4); flightCM500.addEmployee(stew5); flightCM500.addEmployee(stew13); flightCM500.addEmployee(stew14);
pty.addFlight(flightCM500);

// CM322  JFK→PTY  10:00–16:00  6h00m  medio  (retorno de CM321)
export const flightCM322 = new Flight(14, "CM322", jfk, pty,
    new Date(2026, 11, 18, 10, 0), new Date(2026, 11, 18, 16, 0),
    [], "Scheduled", b787_9_1);
flightCM322.addEmployee(cap6); flightCM322.addEmployee(cop6);
flightCM322.addEmployee(pur6); flightCM322.addEmployee(stew1); flightCM322.addEmployee(stew2); flightCM322.addEmployee(stew8); flightCM322.addEmployee(stew9);
jfk.addFlight(flightCM322);

// CM120  PTY→SCL  21:30–06:00+1  8h30m  largo  (B: tiene retorno CM121 el 20)
export const flightCM120 = new Flight(15, "CM120", pty, scl,
    new Date(2026, 11, 18, 21, 30), new Date(2026, 11, 19, 6, 0),
    [], "Scheduled", b787_9_2);
flightCM120.addEmployee(cap4); flightCM120.addEmployee(cop4);
flightCM120.addEmployee(eng3); flightCM120.addEmployee(pur1);
flightCM120.addEmployee(stew6); flightCM120.addEmployee(stew7); flightCM120.addEmployee(stew15); flightCM120.addEmployee(stew16); flightCM120.addEmployee(stew3); flightCM120.addEmployee(stew4);
pty.addFlight(flightCM120);

// ── 19 DIC 2026 ───────────────────────────────────────────────

// CM750  PTY→SDQ  08:00–10:30  2h30m  corto  (A: solo ida)
export const flightCM750 = new Flight(16, "CM750", pty, sdq,
    new Date(2026, 11, 19, 8, 0), new Date(2026, 11, 19, 10, 30),
    [], "Scheduled", b737Max8_1);
flightCM750.addEmployee(cap5); flightCM750.addEmployee(cop5);
flightCM750.addEmployee(pur2); flightCM750.addEmployee(stew10); flightCM750.addEmployee(stew11); flightCM750.addEmployee(stew12);
pty.addFlight(flightCM750);

// CM561  PTY→UIO  11:00–13:15  2h15m  corto  (A: solo ida)
export const flightCM561 = new Flight(17, "CM561", pty, uio,
    new Date(2026, 11, 19, 11, 0), new Date(2026, 11, 19, 13, 15),
    [], "Scheduled", b737Max9_1);
flightCM561.addEmployee(cap6); flightCM561.addEmployee(cop6);
flightCM561.addEmployee(pur3); flightCM561.addEmployee(stew13); flightCM561.addEmployee(stew14); flightCM561.addEmployee(stew15);
pty.addFlight(flightCM561);

// CM611  MEX→PTY  14:00–17:30  3h30m  medio  (retorno de CM610)
export const flightCM611 = new Flight(18, "CM611", mex, pty,
    new Date(2026, 11, 19, 14, 0), new Date(2026, 11, 19, 17, 30),
    [], "Scheduled", b737Max9_2);
flightCM611.addEmployee(cap8); flightCM611.addEmployee(cop8);
flightCM611.addEmployee(pur2); flightCM611.addEmployee(stew5); flightCM611.addEmployee(stew6); flightCM611.addEmployee(stew14); flightCM611.addEmployee(stew15);
mex.addFlight(flightCM611);

// CM900  PTY→MAD  20:00–12:30+1  16h30m  largo  (A: solo ida, ruta estacional)
export const flightCM900 = new Flight(19, "CM900", pty, mad,
    new Date(2026, 11, 19, 20, 0), new Date(2026, 11, 20, 12, 30),
    [], "Scheduled", b787_9_2);
flightCM900.addEmployee(cap7); flightCM900.addEmployee(cop7);
flightCM900.addEmployee(eng1); flightCM900.addEmployee(pur4);
flightCM900.addEmployee(stew1); flightCM900.addEmployee(stew2); flightCM900.addEmployee(stew3); flightCM900.addEmployee(stew7); flightCM900.addEmployee(stew8); flightCM900.addEmployee(stew16);
pty.addFlight(flightCM900);

// ── 20 DIC 2026 ───────────────────────────────────────────────

// CM841B PTY→SJO  07:30–08:45  1h15m  corto  (segunda frecuencia diaria PTY→SJO)
export const flightCM841B = new Flight(20, "CM843", pty, sjo,
    new Date(2026, 11, 20, 7, 30), new Date(2026, 11, 20, 8, 45),
    [], "Scheduled", b737_800_2);
flightCM841B.addEmployee(cap3); flightCM841B.addEmployee(cop3);
flightCM841B.addEmployee(pur5); flightCM841B.addEmployee(stew9); flightCM841B.addEmployee(stew10); flightCM841B.addEmployee(stew11);
pty.addFlight(flightCM841B);

// CM121  SCL→PTY  09:00–17:30  8h30m  largo  (retorno de CM120)
export const flightCM121 = new Flight(21, "CM121", scl, pty,
    new Date(2026, 11, 20, 9, 0), new Date(2026, 11, 20, 17, 30),
    [], "Scheduled", b787_9_2);
flightCM121.addEmployee(cap4); flightCM121.addEmployee(cop4);
flightCM121.addEmployee(eng3); flightCM121.addEmployee(pur1);
flightCM121.addEmployee(stew6); flightCM121.addEmployee(stew7); flightCM121.addEmployee(stew15); flightCM121.addEmployee(stew16); flightCM121.addEmployee(stew3); flightCM121.addEmployee(stew4);
scl.addFlight(flightCM121);

// CM404  BOG→PTY  13:00–14:50  1h50m  corto  (C: vuelo de retorno independiente, diferente tripulación)
export const flightCM404 = new Flight(22, "CM404", bog, pty,
    new Date(2026, 11, 20, 13, 0), new Date(2026, 11, 20, 14, 50),
    [], "Scheduled", b737Max8_2);
flightCM404.addEmployee(cap8); flightCM404.addEmployee(cop8);
flightCM404.addEmployee(pur6); flightCM404.addEmployee(stew12); flightCM404.addEmployee(stew13); flightCM404.addEmployee(stew14);
bog.addFlight(flightCM404);

// ═══════════════════════════════════════════════════════════════
// AIRPORT GRAPH
// Nodos  = aeropuertos (id: código IATA)
// Aristas = vuelos dirigidos (origen → destino)
// Si hay vuelo de ida y vuelta se llama addEdge en ambas direcciones
// ═══════════════════════════════════════════════════════════════
export const airportGraph = new AirportGraph();

// ─── Nodos ───────────────────────────────────────────────────
airportGraph.addNode("PTY", pty);
airportGraph.addNode("SJO", sjo);
airportGraph.addNode("BOG", bog);
airportGraph.addNode("MDE", mde);
airportGraph.addNode("MIA", mia);
airportGraph.addNode("JFK", jfk);
airportGraph.addNode("IAH", iah);
airportGraph.addNode("MEX", mex);
airportGraph.addNode("LIM", lim);
airportGraph.addNode("EZE", eze);
airportGraph.addNode("GRU", gru);
airportGraph.addNode("SCL", scl);
airportGraph.addNode("SDQ", sdq);
airportGraph.addNode("UIO", uio);
airportGraph.addNode("MAD", mad);
airportGraph.addNode("CCS", ccs);

// ─── Aristas (basadas en los 22 vuelos de la data) ───────────

// PTY ↔ SJO  (bidireccional: CM841/CM843 ida, CM302 vuelta)
airportGraph.addEdge("PTY", "SJO");
airportGraph.addEdge("SJO", "PTY");

// PTY ↔ MIA  (bidireccional: CM707 ida, CM708 vuelta)
airportGraph.addEdge("PTY", "MIA");
airportGraph.addEdge("MIA", "PTY");

// PTY ↔ JFK  (bidireccional: CM321 ida, CM322 vuelta)
airportGraph.addEdge("PTY", "JFK");
airportGraph.addEdge("JFK", "PTY");

// PTY ↔ MEX  (bidireccional: CM610 ida, CM611 vuelta)
airportGraph.addEdge("PTY", "MEX");
airportGraph.addEdge("MEX", "PTY");

// PTY ↔ SCL  (bidireccional: CM120 ida, CM121 vuelta)
airportGraph.addEdge("PTY", "SCL");
airportGraph.addEdge("SCL", "PTY");

// PTY ↔ BOG  (BOG→PTY existe como CM404 independiente)
airportGraph.addEdge("PTY", "BOG");
airportGraph.addEdge("BOG", "PTY");

// PTY → CCS  (solo ida: CM480)
airportGraph.addEdge("PTY", "CCS");

// PTY → MDE  (solo ida: CM443)
airportGraph.addEdge("PTY", "MDE");

// PTY → EZE  (solo ida: CM021)
airportGraph.addEdge("PTY", "EZE");

// PTY → LIM  (solo ida: CM270)
airportGraph.addEdge("PTY", "LIM");

// PTY → GRU  (solo ida: CM062)
airportGraph.addEdge("PTY", "GRU");

// PTY → IAH  (solo ida: CM500)
airportGraph.addEdge("PTY", "IAH");

// PTY → SDQ  (solo ida: CM750)
airportGraph.addEdge("PTY", "SDQ");

// PTY → UIO  (solo ida: CM561)
airportGraph.addEdge("PTY", "UIO");

// PTY → MAD  (solo ida: CM900, ruta estacional)
airportGraph.addEdge("PTY", "MAD");
