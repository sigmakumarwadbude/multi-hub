import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  template: `
    <div class="max-w-xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <!-- Card Header -->
      <div class="px-6 py-4 border-b border-gray-200 bg-gray-50">
        <h2 class="text-lg font-semibold text-gray-800">
          {{ pageTitle }}
        </h2>
      </div>

      <!-- Card Body -->
      <div class="px-6 py-6">
        <div class="text-center text-gray-600" aria-label="Developed by">
          Developed by:
        </div>

        <div class="text-center mt-2">
          <h3 class="text-xl font-bold text-gray-900">
            Sigma Wadbude
          </h3>
        </div>
      </div>
    </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class Welcome {
  readonly pageTitle = 'Welcome to Host Shell';
}
