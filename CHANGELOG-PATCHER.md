# Changelog — Vesper LotRO Patcher (`Windows x64`)

Storico delle versioni dell'applicazione desktop **Vesper LotRO Patcher**, dalla più recente alla prima.

> Scarica l'ultima versione da **[GitHub Releases](https://github.com/dylantorresin/vesper-lotro-patcher/releases/latest)**.  
> Per le revisioni dei testi in gioco vedi **[Changelog Traduzione (`CHANGELOG-TRADUZIONE.md`)](CHANGELOG-TRADUZIONE.md)**.

---

## Versioni rilasciate

### `v1.5.1` *(26 novembre 2026 — versione attuale)*
- **Area Traduttori molto più veloce**: ricerca frasi, cambio pagina, filtri e statistiche ora rispondono quasi istantaneamente grazie all'ottimizzazione del server e al riuso delle connessioni sicure.
- **Filtri unificati e più puliti**: rimossi i menu a tendina duplicati nella colonna di ricerca; tutti gli stati (**Tutte**, **Da tradurre**, **Da rivedere (AI)**, **Revisionate**, **Novità** e **Override contestuali**) sono ora in un'unica barra rapida in alto, con il pulsante **Bozze in attesa ↓** che ti porta subito alla coda bozze.
- **`Da rivedere` solo per l'AI e accessi diretti agli override**: il filtro **Da rivedere (AI)** mostra esclusivamente le traduzioni automatiche da controllare, e cliccando un risultato in **Override contestuali** si apre subito il punto esatto del file in modalità *"Solo questo punto"*.
- **Interfaccia e schermata intera rifinite**: intestazione Hub più ordinata, tasti e menu allineati con la stessa altezza, barre di scorrimento scure integrate e layout a 3 colonne ancora più leggibile a schermo intero.
- **Adattamento automatico allo schermo**: all'avvio la finestra si dimensiona da sola in base al monitor (massimizzata sui portatili più compatti, proporzionata su schermi grandi/4K) con la nuova opzione predefinita **Testo: Auto** per mantenere tutto sempre leggibile.

### `v1.5.0` *(25 novembre 2026)*
- **Glossario V3 a portata di clic per i traduttori**: nell'Area Traduttori c'è il nuovo pulsante **Glossario V3** per consultare tutti i termini ufficiali (canone Alliata) con ricerca e filtro per sezione.
- **Proponi termini nuovi o correzioni**: ogni traduttore può suggerire una parola nuova o una modifica a una voce esistente, con una nota per spiegare la scelta. Un revisore controlla la proposta e la approva o la rifiuta, così il glossario resta sempre coerente.
- **Area Traduttori più semplice e chiara**: gli errori del controllo automatico ora sono spiegati in italiano (es. "Parentesi quadre diverse dall'inglese"), la pagina non perde più il punto in cui stavi scrivendo, i codici tecnici sono nascosti in "Dettagli tecnici" e il controllo parte da solo prima di inviare una bozza.
- **Coda bozze migliorata**: filtro "Solo le mie", pulsante "Carica altre" e conferma prima di rifiutare senza una nota.
- **Sessione scaduta gestita bene**: se l'accesso scade, l'app te lo dice con un solo messaggio e ti riporta al login.
- **Per lo staff**: nuova scheda **Attività** con lo storico delle revisioni e, per gli amministratori, il pannello **Amministrazione** per gestire gli utenti e preparare i nuovi pacchetti della traduzione.

### `v1.4.1` *(24 novembre 2026)*
- **Chi ha tradotto ogni frase, finalmente visibile**: nell'Area Traduttori ogni stringa mostra la sua vera provenienza al posto della generica etichetta "AI": **`Freemont`** (viola), **`AI`** (solo traduzioni automatiche Gemini), **`QA Vesper`**, oppure il **profilo del traduttore Hub** con chi l'ha approvata (es. `✍ mario · ✓ dylan`). Le frasi già controllate riportano **`✓ revisionata`**; passando il mouse sul badge compare la spiegazione completa.

### `v1.4.0` *(24 novembre 2026)*
- **21 categorie di gioco in Area Traduttori (`Vesper Translate Hub`)**: nuovo filtro dedicato per esplorare e revisionare subito per ambito reale (`Missioni`, `Dialoghi`, `Abilità`, `Tratti`, `Oggetti`, `Artigianato`, `Imprese`, `PNG`, `Nemici`, `Titoli`, ecc.) con contatori file e badge chiari sia nei risultati sia nel *Contesto File*.
- **Rilevamento rapido nuove patch & testi da tradurre**: selettore automatico delle patch disponibili, filtri dedicati **`Da tradurre`** (`pending` + fallite) e **`Novità patch`** (**`NUOVA`** / **`MODIFICATA`** rispetto alla patch precedente) e pulsanti statistici cliccabili in 1 clic.
- **Guida Rapida Traduttori integrata in-app**: nuovo pulsante **`Guida Traduttori`** nella scheda `Traduttori` (accessibile solo dopo il login) con flusso operativo, regole tag 1:1, genere M/F e riferimento rapido *Canone Alliata/Principe & Glossario V3*.
- **Ricerca Hub più veloce**: ottimizzazione lato server delle query per categoria di gioco.

### `v1.3.1` *(22 novembre 2026)*
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
