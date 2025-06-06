# Box Shadow Generator

A beautiful, interactive TypeScript React-based tool for generating CSS box shadows with live preview. Create stunning shadow effects with an intuitive interface and copy both CSS and React-style code instantly.

## ✨ Features

- **Live Preview** - See your shadow effects in real-time as you adjust parameters
- **Full Control** - Adjust all box-shadow properties including:
  - Horizontal offset (X-axis) with negative values
  - Vertical offset (Y-axis) with negative values  
  - Blur radius
  - Spread radius
  - Shadow color (with color picker and hex input)
  - Inset shadows
- **Element Dimensions** - Customize the preview element's width and height
- **One-Click Copy** - Copy generated CSS or React-style code to clipboard instantly
- **Quick Presets** - Pre-configured shadow styles for common use cases
- **Responsive Design** - Works seamlessly on desktop and mobile devices
- **Modern UI** - Clean, professional interface with smooth interactions

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager
- TypeScript (if not using Create React App with TypeScript template)

### Installation

1. Clone or download the project files
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

4. Open your browser and navigate to `http://localhost:3000`

## 🎯 Usage

### Basic Usage

1. **Adjust Element Size**: Use the width and height sliders to change the preview element dimensions
2. **Modify Shadow Properties**: 
   - Move the offset sliders to position your shadow
   - Adjust blur radius for shadow softness
   - Change spread radius to make shadows larger or smaller
   - Pick a color using the color picker or enter a hex value
3. **Toggle Inset**: Check the inset box to create inner shadows
4. **Copy Code**: Click the "Copy CSS" or "Copy React" button to copy the generated code to your clipboard in your preferred format

### Quick Presets

Use the preset buttons for common shadow effects:
- **Subtle**: Light, barely visible shadow for elegant elements
- **Floating**: Elevated appearance with soft shadow underneath
- **Glow**: Colorful glow effect around the element
- **Inset**: Inner shadow for pressed/recessed appearance

### Generated Code

The tool generates both CSS and React-style code formats:

**CSS Format:**
```css
box-shadow: 5px 5px 10px 0px #000000;
```

**React Style Format:**
```jsx
boxShadow: '5px 5px 10px 0px #000000'
```

For inset shadows:
```css
/* CSS */
box-shadow: inset 5px 5px 10px 0px #000000;
```
```jsx
// React
boxShadow: 'inset 5px 5px 10px 0px #000000'
```

## 🛠️ Technical Details

### Built With

- **React** - Frontend framework with hooks for state management
- **TypeScript** - Type-safe JavaScript for better development experience
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Modern JavaScript** - ES6+ features and functional components

### Project Structure

```
src/
├── App.tsx         # Main component with shadow generator logic (TypeScript)
├── App.css         # Additional custom styles
├── main.tsx       # React app entry point (TypeScript)
└── types/          # TypeScript type definitions (if any)
```

### Key Components

- **State Management**: Uses React hooks (`useState`) with TypeScript interfaces for type safety
- **Real-time Updates**: All changes are reflected immediately in the preview
- **Code Generation**: Dynamic CSS and React-style string generation based on current settings
- **Clipboard API**: Modern browser clipboard integration for copying code in multiple formats
- **Type Safety**: TypeScript ensures robust development with compile-time error checking

## 🎨 Customization

### Modifying Ranges

You can adjust the min/max values for sliders by changing the range inputs:

```jsx
<input
  type="range"
  min={-50}    // Minimum value
  max={50}     // Maximum value
  value={boxShadow.offsetX}
  // ...
/>
```

### Adding New Presets

Add new preset configurations to the preset buttons section:

```tsx
<button
  onClick={() => setBoxShadow({
    offsetX: 0,
    offsetY: 2,
    blurRadius: 4,
    spreadRadius: 0,
    color: '#ff6b6b',
    inset: false
  })}
>
  Custom Preset
</button>
```

### Adding Type Definitions

If you need custom types, create interface definitions:

```typescript
interface BoxShadowState {
  offsetX: number;
  offsetY: number;
  blurRadius: number;
  spreadRadius: number;
  color: string;
  inset: boolean;
}

interface DimensionsState {
  width: number;
  height: number;
}
```

### Styling Changes

The component uses Tailwind CSS classes. Modify the className properties to change the appearance:

```tsx
<div className="bg-white rounded-2xl shadow-lg p-8">
  {/* Your custom styling */}
</div>
```

## 📱 Browser Compatibility

- Chrome/Chromium (recommended)
- Firefox
- Safari
- Edge

*Note: Some advanced CSS features may have limited support in older browsers.*

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙋‍♂️ Support

If you encounter any issues or have questions:

1. Check the browser console for error messages
2. Ensure all dependencies are properly installed
3. Verify your Node.js and TypeScript versions are compatible
4. Try clearing your browser cache
5. Check for TypeScript compilation errors

## 🔮 Future Enhancements

- [ ] Multiple shadow layers support
- [ ] Export to different formats (Sass, CSS variables, styled-components)
- [ ] Shadow animation presets
- [ ] Import/export shadow configurations
- [ ] More preset categories
- [ ] Undo/redo functionality
- [ ] Keyboard shortcuts
- [ ] Better TypeScript type definitions
- [ ] Unit testing with Jest and React Testing Library

---

**Happy shadow crafting! 🎨✨**