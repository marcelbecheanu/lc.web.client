import { createRoot } from 'react-dom/client';
import Routes from './routes';

createRoot(
    document.getElementById('app')
).render(
    <Routes/>
);