# **Crito Webplats**
Denna webbplats utvecklades som en del i min utbildning hos EC-utbildning och omfattar HTML och CSS

## Svårigheter
Jag skulle inte säga att det var något direkt svårt, men det blev tydligt att en god struktur är avgörande när man bygger hem webbplats, både när det gäller CSS/SCSS men även HTML. Det var också praktiskt att använda globala klasser, som vi gjorde med 'section-title'. Jag upplevde att det blev lite konstigt när jag inkluderade SCSS-filer för varje HTML-sida. Ibland fungerade det direkt, men ibland var det nödvändigt att lägga till ny kod för att få det att fungera.

## Lärdomar
Som jag nämnt tidigare är **struktur och planering** avgörande när man bygger en webbplats. Jag fann ett sätt som fungerade bra för mig, där jag oftast använde _"grid"_ som den övergripande layouten och lät _"flex"_ hantera layouten i de inre elementen. 

## Innehåll
- Beskrivning
- Mappstruktur
- Stil och layout

## Beskrivning
Denna sida är utvecklad för att representera det fiktiva företaget Crito och dess verksamhet.

## Mappstruktur
Här är en översikt över mappstrukturen för mitt projekt:

- **SCSS**: Innehåller SCSS/CSS-filer som definerar sidans stil. Jag har valt att lägga varje sidas scss i åtskilda filer, vilket egentligen inte behövs då det är en liten sida, men jag ville helt enkelt testa.
- **Images**: Lagrar alla bilder som jag använt.
- **Script**: Innehåller JavaScript till bildkarusellen.
- **index.html**: Huvudsida.
- **news.html**: Nyhets/artikelsida.
- **contact.html**: Kontaktsida.
- **services.html**: Här lekte jag lite med animationer

## Stil och layout
Sidan använder SCSS för att definera stil och layout. Koden är strukturerad enligt min preferens.

## JavaScript 
Sidan innehåller även ett JavaScript för en bildkarusell i news.html, jag hade lite svårigheter att få till "..." så det är inte med. 
Jag hade kunnat hårdkoda det med HTML och CSS, men valde att göra det på det här sättet istället.

