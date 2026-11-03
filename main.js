// Import and inject Vercel Speed Insights
import { injectSpeedInsights } from '@vercel/speed-insights';

// Initialize Speed Insights
injectSpeedInsights();

// Import timetable data and application code
import './timetable.js';
import './app.js';
