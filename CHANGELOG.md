# Changelog — Traduzione Italiana LOTRO & Vesper LotRO Patcher

Tutte le novità delle revisioni della traduzione e del Patcher, dalla più recente alla prima, più l'elenco delle segnalazioni già raccolte e pronte per il prossimo aggiornamento.

> Per installare o aggiornare la traduzione basta aprire **Vesper LotRO Patcher** e cliccare **Aggiorna Traduzione Italiana**.

---

## Traduzione Italiana (`LOTRO U50.2`)

### `U50.2 — Revisione r4` *(22 novembre 2026 — versione attuale)*
- **Schermata di selezione personaggio / Lobby**: accorciato il pulsante principale di ingresso su 2 righe (***La Terra\ndi Mezzo***), compattato ***Gioco dei Mostri*** / *Avvia Mostri* ed eliminato il taglio vicino all'Anello; rifinite anche le voci di personalizzazione aspetto (*Barba e Baffi*, *Corporatura*, *Acconciatura*).
- **Opzioni → Grafica Avanzata & Interfaccia**: sostituiti termini tecnici poco naturali e uniformati i relativi tooltip (*Distanza vegetazione*, *Densità vegetazione*, *Colore vegetazione terreno*, *Texture*, *Filtraggio Texture*, *Oggetti distanti*, *Ambiente*), risolti i pulsanti troncati (*Predef. Avanzate*, *Tutti*) e corretto il tooltip dell'equipaggiamento (*Apri/chiudi equipaggiamento*).
- **Toponimi, titoli ed emote**: uniformata in oltre 150 missioni e dialoghi delle Terre Solitarie ***La Locanda Abbandonata*** (*The Forsaken Inn*, eliminando sviste in cui compariva il *Puledro Impennato* o concordanze errate), corretto il titolo ***Guardaconfini della Contea*** e sistemata la concordanza grammaticale dell'emote */hug* (`Ti abbracci. Non ti senti meglio?`).

### `U50.2 — Revisione r3` *(22 novembre 2026)*
- **Interfaccia compatta anti-troncamento**: accorciate quasi 600 voci tra pulsanti, schede, opzioni e statistiche per evitare testi tagliati o sovrapposti in-game *(es. `Pet` → `Famiglio` nell'interfaccia, `Mailbox` → `Posta`, `Escrow` → `Deposito`, `Restore defaults?` → `Ripristina predefiniti?`, `Join Request` → `Richiesta`, `Show Vitals` → `Mostra Vitali`)*.
- **Comandi chat sui server EU**: ripristinati in inglese i comandi slash e alias di chat (`/lff`, `/say`, `/who`, `/inspect`, `/ui`, ecc.) così continuano a funzionare regolarmente, mantenendo in italiano i messaggi di stato a schermo.
- **Rifiniture di combattimento e oggetti**: sistemati *Forgia Oscura* (`Fell-wrought`), *Forgia Orchesca* (`Orc-craft`), *Potere nel Tempo* (`A PoT`) e ripulita una nota residua su un titolo di oggetto.

### `U50.2 — Revisione r2` *(22 novembre 2026)*
- **Popup e messaggi senza residui inglesi**: rimossi gli articoli/possessivi inglesi davanti ai nomi degli oggetti e nei log *(es. risolto `Equipaggiare the Elmo...`)*.
- **Diario delle Missioni**: corretto *Sfondo* → ***Antefatto*** nella scheda delle missioni, mantenuto *Avidità* sul pulsante del bottino e compattate diverse etichette a rischio sovrapposizione *(tra cui `Liv. Missione:`, `Opzioni Tracciatore:`, `Ordina per:`, `Mantenimento:`, `Info Blocchi Forzieri:`)*.
- **Ordine naturale di creature e oggetti**: sistemata la posizione degli aggettivi nei nomi composti *(es. `Lupo Errante delle Pianure`)*.
- **Terminologia uniformata**: adottati in tutta la traduzione ***Stalliere / Stallieri*** (`Stable-master`), ***Segnavia*** (`Trail Marker`), ***Custode del Forziere*** (`Vault-keeper`), ***Mastro Fabbro*** (`Forge-master`), ***Sale di Thorin*** (`Thorin's Hall`), ***Corte di Frerin*** (`Frerin's Court`), ***Ruggitoro*** (`Bullroarer`), ***Schiera*** (`Host` militare) e ***Corazza*** (`Chestplate`), eliminando falsi amici, refusi e piccole sviste di preposizioni/articoli italiani.

### `U50.2 — Revisione r1` *(20 novembre 2026)*
- Prima traduzione italiana completa al **100%** di **LOTRO U50.2** basata sul canone storico **Alliata/Principe**, verificata in-game su client Windows.

---

## Vesper LotRO Patcher (`Windows x64`)

### `v1.3.1` *(22 novembre 2026 — versione attuale)*
- **Schermo intero ottimizzato per monitor grandi e ultrawide (es. 34")**: l'Area Traduttori ora sfrutta tutta la larghezza della finestra con pannelli più ampi (fino a 3 colonne affiancate per ricerca, editor e contesto file).
- **Testo ingrandibile a scelta**: aggiunto in alto a destra il selettore **`Testo: Normale / Grande / Molto grande`** con dimensionamento più leggibile automatico sugli schermi ad alta risoluzione.
- **Compatibilità e stabilità Hub**: migliorata la lettura e la resilienza di caricamento delle frasi dal server traduttori.

### `v1.3.0` *(22 novembre 2026)*
- **Avanzamento in tempo reale (`0% → 100%`) e barra di progresso**: durante l'installazione, l'aggiornamento e il ripristino in inglese originale ora vedi esattamente a che punto si trova l'operazione passo dopo passo, inclusa la creazione del backup iniziale e il salvataggio del file di gioco.
- **Riepilogo chiaro dei contenuti tradotti**: nella schermata **Giocatore** trovi la checklist di stato con ciò che è installato o da aggiornare (*Testi di gioco* attivi; moduli opzionali *Mappe in italiano* e *Video in italiano* predisposti in arrivo).

### `v1.2.0` *(22 novembre 2026)*
- **Area Traduttori a Contesto (`Vesper Translate Hub`) potenziata**:
  - **Vista contesto file (`0x...`)**: selezionando una stringa vengono mostrati tutti i testi fratelli dello stesso file (es. intera missione, PNG o finestra dell'interfaccia) con passaggio rapido tra globale e modifica puntuale (`file_id:fragment_id`).
  - **Ricerca avanzata & paginazione**: aggiunti filtri per **Categoria**, **Stato**, codice file (`0x...`) e navigazione tra le pagine dei risultati.
  - **Revisione più chiara**: confronto diretto *Prima (TM attuale) → Dopo (Bozza proposta)*, statistiche leggibili a schede, nota del revisore e opzione controllata per i ritorni a capo UI (`\n`).
- Include tutti i miglioramenti della `v1.1.0` per i giocatori (aggiornamento 1 clic, stato *"Hai già l'ultima versione disponibile"* e avviso nuove versioni).

### `v1.1.0` *(22 novembre 2026)*
- **Stato aggiornamenti traduzione chiaro**: controllo automatico silenzioso all'avvio; quando hai già installato l'ultima traduzione disponibile mostra **"Hai già l'ultima versione disponibile"** e disabilita il pulsante di aggiornamento ridondante, mentre evidenzia subito quando esce una nuova revisione.
- **Avviso nuova versione del Patcher**: quando viene pubblicata una nuova versione di *Vesper LotRO Patcher* su GitHub Releases, mostra un banner dedicato in cima all'app con il pulsante **Scarica la nuova versione**.
- **Interfaccia più pulita e avanzamento download**: rimossi i pulsanti doppi di *Discord* e *PayPal* dalla barra superiore (mantenendoli nella barra inferiore), aggiunto avanzamento percentuale/MB durante lo scaricamento della traduzione e durata operazione arrotondata in modo leggibile.

### `v1.0.0` *(22 novembre 2026)*
- Prima release pubblica dell'installer Windows (`x64`).
- Rilevamento automatico della cartella di LOTRO, download e applicazione della traduzione in 1 clic, backup locale per tornare in inglese originale in qualsiasi momento e protezione automatica per i file tradotti manualmente senza backup inglese.

---

## In lavorazione per il prossimo aggiornamento (`U50.2 r5`)

Raccolta continua delle segnalazioni in-game per i prossimi aggiornamenti cumulativi:

- Nessuna voce in sospeso al momento: le segnalazioni aperte finora sono state tutte integrate nella revisione **`U50.2 r4`**.

Hai notato un errore di traduzione, un testo tagliato o un nome strano in gioco? Segnalacelo sul **[Canale Discord LOTRO Italia](https://discord.gg/KpAYHHsrzV)** o nella sezione **[Issues](https://github.com/dylantorresin/vesper-lotro-patcher/issues)**: lo aggiungeremo alla coda del prossimo aggiornamento!
