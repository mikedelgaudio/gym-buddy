import Router, { Route } from 'preact-router';
import { NavigationBar } from './controls/NavigationBar/NavigationBar';
import { Home } from './routes/Home/Home';
import { NotFound } from './routes/NotFound/NotFound';

export function App() {
  return (
    <div class="text-black bg-white min-w-fit min-h-[100dvh]">
      <div class="antialiased flex justify-center p-8">
        <div class="flex flex-col max-w-2xl w-full">
          <NavigationBar />
          <main>
            <Router>
              <Route path="/" component={Home} />
              <Route default component={NotFound} />
            </Router>
          </main>
        </div>
      </div>
    </div>
  );
}
