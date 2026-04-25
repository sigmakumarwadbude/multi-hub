import { Component } from '@angular/core';

@Component({
  selector: 'app-posts-mf',
  standalone: true,
  template: `
    <div class="p-6 bg-blue-600 border-4 border-blue-400 rounded-xl shadow-lg m-4 text-white">
      <h2 class="text-3xl font-extrabold mb-4 tracking-tight">Posts Microfrontend</h2>
      <p class="font-medium mb-6">Welcome to the dedicated posts area. This content is served from a separate microfrontend.</p>
    </div>
  `,
})
export class App {}
