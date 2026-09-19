import React from 'react';
import { Home, BookOpen } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { Button } from '../components/common/Button';

export const NotFound: React.FC = () => {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="The page you are looking for does not exist on BrainSetu Academy."
      />

      <main className="min-h-[70vh] flex items-center justify-center bg-brand-slate-bg py-16 px-4">
        <div className="max-w-md w-full text-center p-8 bg-white rounded-3xl border border-slate-200 shadow-card space-y-6">
          <div className="w-20 h-20 mx-auto rounded-3xl bg-cyan-50 text-brand-secondary flex items-center justify-center font-display font-black text-3xl border border-cyan-200">
            404
          </div>

          <div>
            <h1 className="text-2xl font-display font-bold text-brand-primary-deep">
              Bridge Path Not Found
            </h1>
            <p className="text-sm text-brand-slate-muted mt-2 leading-relaxed">
              We couldn’t find the page or concept you are searching for. Let’s reconnect you with our core learning pathways.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <Button
              to="/"
              variant="primary"
              size="md"
              icon={<Home className="w-4 h-4" />}
            >
              Return Home
            </Button>
            <Button
              to="/programs"
              variant="outline"
              size="md"
              icon={<BookOpen className="w-4 h-4" />}
            >
              Browse Programs
            </Button>
          </div>
        </div>
      </main>
    </>
  );
};
