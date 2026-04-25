import { Component } from '@angular/core';

@Component({
  selector: 'app-users-mf',
  standalone: true,
  template: `
    <div class="p-6 bg-purple-600 border-4 border-purple-400 rounded-xl shadow-lg m-4 text-white">
      <h2 class="text-3xl font-extrabold mb-4 tracking-tight">Users Microfrontend</h2>
      <p class="font-medium mb-6">Manage your user base here. This section is managed by the users-mf microfrontend.</p>
    </div>
  `,
})
export class App {}
