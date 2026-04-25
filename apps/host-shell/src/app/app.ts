import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  imports: [RouterModule],
  selector: 'app-root',
  template: `
    <nav class="bg-slate-900 p-4 shadow-xl border-b border-slate-700 mb-6">
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        <h1 class="text-white text-xl font-black tracking-tighter uppercase mr-8">Multi-Hub <span class="text-cyan-400">Portal</span></h1>
        <ul class="flex space-x-4">
          <li>
            <a routerLink="/" 
               routerLinkActive="bg-slate-800 text-cyan-400" 
               [routerLinkActiveOptions]="{exact: true}"
               class="px-4 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-all font-semibold decoration-0 no-underline cursor-pointer">
              Home
            </a>
          </li>
          <li>
            <a routerLink="/posts" 
               routerLinkActive="bg-slate-800 text-cyan-400" 
               class="px-4 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-all font-semibold decoration-0 no-underline cursor-pointer">
              Posts
            </a>
          </li>
          <li>
            <a routerLink="/users" 
               routerLinkActive="bg-slate-800 text-cyan-400" 
               class="px-4 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-all font-semibold decoration-0 no-underline cursor-pointer">
              Users
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <router-outlet></router-outlet>
    </main>
  `
})
export class App {}
