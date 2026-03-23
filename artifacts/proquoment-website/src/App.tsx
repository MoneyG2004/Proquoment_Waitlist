import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PlatformPage from "@/pages/PlatformPage";
import CaseStudiesPage from "@/pages/CaseStudiesPage";
import ContactPage from "@/pages/ContactPage";
import WaitlistPage from "@/pages/WaitlistPage";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function WithLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/waitlist" component={WaitlistPage} />
      <Route path="/">
        <WithLayout><PlatformPage /></WithLayout>
      </Route>
      <Route path="/case-studies">
        <WithLayout><CaseStudiesPage /></WithLayout>
      </Route>
      <Route path="/contact">
        <WithLayout><ContactPage /></WithLayout>
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <Router />
      </WouterRouter>
    </QueryClientProvider>
  );
}

export default App;
