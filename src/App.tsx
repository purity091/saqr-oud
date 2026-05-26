/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Builder from './pages/Builder';
import Presentation from './pages/Presentation';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/build/:id" element={<Builder />} />
        <Route path="/present/:id" element={<Presentation />} />
      </Routes>
    </BrowserRouter>
  );
}
