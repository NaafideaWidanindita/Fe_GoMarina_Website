import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Beranda from "c:/xampp/htdocs/WEBSITE-USER/gomarina-user/src/components/Beranda";
// Import komponen lain jika diperlukan

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Beranda} />
        {/* Tambahkan Route lain jika ada halaman lain */}
      </Switch>
    </Router>
  );
}

export default App;
