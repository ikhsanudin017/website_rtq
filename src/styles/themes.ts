/**
 * Islamic Blue & Gold Theme
 * Elegant, traditional, luxurious Islamic theme
 */
export const islamicBlueTheme = {
  name: 'Islamic Blue & Gold',
  colors: {
    primary: {
      50: '#eff6ff',   // blue-50
      100: '#dbeafe',  // blue-100
      500: '#3b82f6',  // blue-500
      600: '#2563eb',  // blue-600
      700: '#1d4ed8',  // blue-700
      800: '#1e40af',  // blue-800
      900: '#1e3a8a'   // blue-900
    },
    secondary: {
      300: '#fcd34d',  // amber-300
      400: '#fbbf24',  // amber-400
      500: '#f59e0b',  // amber-500
      600: '#d97706',  // amber-600
      700: '#b45309'   // amber-700
    },
    background: {
      light: '#ffffff',      // pure white
      soft: '#f8fafc',       // slate-50
      card: '#ffffff',       // white cards
      accent: '#eff6ff'      // blue-50
    },
    text: {
      primary: '#1e3a8a',    // blue-900
      secondary: '#64748b',  // slate-500
      accent: '#d97706',     // amber-600
      gold: '#f59e0b',       // amber-500
      white: '#ffffff'
    }
  },
  gradients: {
    hero: 'from-blue-50 via-indigo-50 to-blue-100',
    card: 'from-blue-600 to-blue-700',
    accent: 'from-amber-400 to-amber-600',
    header: 'from-blue-700 via-blue-800 to-blue-900'
  },
  shadows: {
    card: 'shadow-lg shadow-blue-500/10',
    button: 'shadow-md shadow-blue-600/20',
    gold: 'shadow-lg shadow-amber-500/20'
  },
  patterns: {
    islamic: 'bg-gradient-to-br from-blue-600 to-blue-800',
    ornament: 'bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600'
  }
}

/**
 * Night & Stars Theme  
 * Calm, spiritual, mysterious night theme
 */
export const nightStarsTheme = {
  name: 'Night & Stars',
  colors: {
    primary: {
      50: '#f0f9ff',
      500: '#1e40af', // blue-700
      700: '#1d4ed8', // blue-700
      800: '#1e3a8a', // blue-800
      900: '#1e293b'  // slate-800
    },
    secondary: {
      400: '#fbbf24', // amber-400
      500: '#f59e0b', // amber-500
      600: '#e5e7eb'  // gray-200 (silver)
    },
    background: {
      light: '#0f172a', // slate-900
      soft: '#1e293b',  // slate-800
      card: '#334155'   // slate-700
    },
    text: {
      primary: '#f8fafc', // slate-50
      secondary: '#cbd5e1', // slate-300
      accent: '#fbbf24'     // amber-400
    }
  },
  gradients: {
    hero: 'from-slate-900 via-blue-900 to-slate-800',
    card: 'from-slate-800 to-slate-700',
    accent: 'from-amber-400 to-yellow-500'
  }
}

/**
 * Sunrise Serenity Theme
 * Fresh, energetic, optimistic morning theme
 */
export const sunriseTheme = {
  name: 'Sunrise Serenity',
  colors: {
    primary: {
      50: '#fff7ed',
      500: '#ea580c', // orange-600
      600: '#dc2626', // red-600
      700: '#b91c1c'  // red-700
    },
    secondary: {
      400: '#fbbf24', // amber-400
      500: '#f59e0b', // amber-500
      600: '#0ea5e9'  // sky-500
    },
    background: {
      light: '#fffbeb', // amber-50
      soft: '#fef3c7',  // amber-100
      card: '#ffffff'
    },
    text: {
      primary: '#92400e', // amber-800
      secondary: '#78716c', // stone-500
      accent: '#ea580c'     // orange-600
    }
  },
  gradients: {
    hero: 'from-orange-100 via-amber-50 to-yellow-100',
    card: 'from-orange-500 to-red-500',
    accent: 'from-yellow-400 to-orange-500'
  }
}

/**
 * Modern Minimalist Theme
 * Clean, simple, professional
 */
export const minimalistTheme = {
  name: 'Modern Minimalist',
  colors: {
    primary: {
      50: '#f8fafc',
      500: '#475569', // slate-600
      600: '#334155', // slate-700
      700: '#1e293b'  // slate-800
    },
    secondary: {
      500: '#06b6d4', // cyan-500
      600: '#0891b2'  // cyan-600
    },
    background: {
      light: '#ffffff',
      soft: '#f8fafc',
      card: '#ffffff'
    },
    text: {
      primary: '#0f172a', // slate-900
      secondary: '#64748b', // slate-500
      accent: '#0891b2'     // cyan-600
    }
  },
  gradients: {
    hero: 'from-slate-50 to-gray-100',
    card: 'from-slate-600 to-slate-700',
    accent: 'from-cyan-500 to-blue-600'
  }
}

/**
 * Soft Pastel Theme
 * Gentle, friendly, welcoming
 */
export const pastelTheme = {
  name: 'Soft Pastel',
  colors: {
    primary: {
      50: '#f0fdf4',
      500: '#22c55e', // green-500
      600: '#16a34a', // green-600
      700: '#15803d'  // green-700
    },
    secondary: {
      400: '#f9a8d4', // pink-300
      500: '#ec4899', // pink-500
      600: '#38bdf8'  // sky-400
    },
    background: {
      light: '#fefce8', // yellow-50
      soft: '#f0fdf4',  // green-50
      card: '#ffffff'
    },
    text: {
      primary: '#365314', // green-800
      secondary: '#84cc16', // lime-500
      accent: '#ec4899'     // pink-500
    }
  },
  gradients: {
    hero: 'from-green-50 via-emerald-50 to-teal-50',
    card: 'from-green-400 to-emerald-500',
    accent: 'from-pink-400 to-rose-500'
  }
}
