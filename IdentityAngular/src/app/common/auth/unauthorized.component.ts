import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <div class="app-body">
        <main class="main d-flex align-items-center">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 mx-auto">
                        <div class="card-group">
                            <div class="card p-4">
                                <div class="card-body">
                                    <h1>Unauthorized</h1>
                                    <p class="text-muted">You do not have access to this area.</p>
                                </div>
                            </div>
                            <div class="card text-white bg-primary py-5 d-md-down-none" style="width:44%">
                                <div class="card-body text-center">
                                    <div>
                                        <h2>Contact administrator</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
  `,
  styles: []
})
export class UnauthorizedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}