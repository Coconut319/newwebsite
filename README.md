# Adfusion Solar - Premium Werbeagentur Website

Eine luxuriöse, hochwertige Website für die fiktive Werbeagentur "Adfusion Solar" mit modernem Design, deutschen Inhalten und responsiver Gestaltung.

## 🚀 Features

### Design & Styling
- **Luxury Design**: Hochwertiges, professionelles Design mit Glassmorphism-Effekten
- **Inter Font**: Moderne Typografie mit Inter als Hauptschriftart
- **Phosphor Icons**: Konsistente Icon-Bibliothek mit Light-Weight Icons
- **Neumorphism Buttons**: 3D-Style Buttons mit Glow-Effekt beim Hover
- **Glassmorphic Cards**: Transparente Karten mit Hintergrund-Blur

### Animationen & Interaktivität
- **Scroll-Animationen**: Fade-in und Slide-up Effekte beim Scrollen
- **Parallax-Effekte**: Dynamische Hintergrund-Bewegungen
- **Hover-Effekte**: Interaktive Elemente mit 3D-Transformationen
- **Loading-Animationen**: Smooth Page-Load mit Opacity-Übergängen

### Responsive Design
- **Mobile-First**: Optimiert für alle Bildschirmgrößen
- **Burger-Menü**: Animiertes Mobile-Navigation mit Slide-in Effekt
- **Flexible Grids**: CSS Grid und Flexbox für optimale Layouts
- **Touch-Friendly**: Optimiert für Touch-Geräte

## 📁 Projektstruktur

```
adss/
├── index.html          # Homepage mit allen Hauptsektionen
├── about.html          # Über uns Seite
├── contact.html        # Kontaktseite mit Formular
├── blog.html           # Blog mit 4 Artikeln
├── styles.css          # Haupt-Stylesheet
├── script.js           # JavaScript für Interaktivität
└── README.md           # Projekt-Dokumentation
```

## 🎨 Design-System

### Farbpalette
- **Primary**: #6366f1 (Indigo)
- **Secondary**: #f59e0b (Amber)
- **Accent**: #10b981 (Emerald)
- **Text Primary**: #1f2937 (Gray-800)
- **Text Secondary**: #6b7280 (Gray-500)

### Typografie
- **Font Family**: Inter (Google Fonts)
- **Font Weights**: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semi-bold), 700 (Bold)
- **Letter Spacing**: -0.025em für Überschriften

### Komponenten
- **Glassmorphic Cards**: `backdrop-filter: blur(20px)`, `rgba(255, 255, 255, 0.1)`
- **Neumorphism Buttons**: 3D-Effekt mit `box-shadow` und `transform`
- **Gradient Backgrounds**: CSS-Gradients für moderne Optik

## 📱 Seitenübersicht

### Homepage (index.html)
1. **Hero Section**: Titel, Copy, CTA-Button, Dashboard-Mockup
2. **Featured In**: Logo-Grid bekannter Unternehmen
3. **Testimonials**: Scrollende Testimonial-Karussell mit Ergebnissen
4. **How It Works**: 3-Karten-Prozess (Analyse, Setup, Optimierung)
5. **Features**: 4-Karten-Grid mit Vorteilen
6. **Mission**: Unternehmensmission mit Statistiken
7. **Pricing**: 3 Pläne (Starter, Pro, Enterprise)
8. **FAQ**: Akkordeon-Style FAQ-Sektion
9. **Footer**: Vollständige Footer-Navigation

### About Page (about.html)
- Unternehmensgeschichte
- Team-Vorstellung (4 Mitglieder)
- Unternehmenswerte
- Statistiken

### Contact Page (contact.html)
- Kontaktinformationen
- Interaktives Kontaktformular
- FAQ-Sektion
- Öffnungszeiten

### Blog Page (blog.html)
- Featured Article
- 4 Blog-Artikel
- Newsletter-Anmeldung
- Kategorie-Übersicht

## 🛠️ Technische Details

### CSS Features
- **CSS Custom Properties**: Umfassende Verwendung von CSS-Variablen
- **CSS Grid & Flexbox**: Moderne Layout-Techniken
- **Backdrop Filter**: Glassmorphism-Effekte
- **CSS Animations**: Smooth Transitions und Keyframes
- **Media Queries**: Responsive Breakpoints

### JavaScript Features
- **Intersection Observer**: Scroll-basierte Animationen
- **Event Listeners**: Interaktive Funktionalität
- **DOM Manipulation**: Dynamische Inhalte
- **Performance Optimization**: Throttled Scroll Events
- **Accessibility**: Keyboard Navigation und Focus Management

### Browser Support
- Chrome 88+
- Firefox 87+
- Safari 14+
- Edge 88+

## 🚀 Installation & Verwendung

1. **Repository klonen**:
   ```bash
   git clone [repository-url]
   cd adss
   ```

2. **Lokalen Server starten**:
   ```bash
   # Mit Python
   python -m http.server 8000
   
   # Mit Node.js
   npx serve .
   
   # Mit PHP
   php -S localhost:8000
   ```

3. **Im Browser öffnen**:
   ```
   http://localhost:8000
   ```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Performance-Optimierungen

- **Lazy Loading**: Bilder und Komponenten
- **CSS Optimization**: Minimierte und optimierte Stylesheets
- **JavaScript Throttling**: Performance-optimierte Scroll-Events
- **Font Loading**: Optimierte Google Fonts Integration

## 🔧 Anpassungen

### Farben ändern
Bearbeiten Sie die CSS-Variablen in `styles.css`:
```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #f59e0b;
    --accent-color: #10b981;
    /* ... weitere Variablen */
}
```

### Inhalte anpassen
- **Texte**: Direkt in den HTML-Dateien bearbeiten
- **Bilder**: Ersetzen Sie die `.image-placeholder` Divs durch echte `<img>` Tags
- **Icons**: Phosphor Icons können über die `ph-*` Klassen geändert werden

## 📄 Lizenz

Dieses Projekt ist für Demonstrationszwecke erstellt. Alle Rechte vorbehalten.

## 🤝 Support

Bei Fragen oder Problemen erstellen Sie bitte ein Issue im Repository oder kontaktieren Sie das Entwicklungsteam.

---

**Entwickelt mit ❤️ für Adfusion Solar**
