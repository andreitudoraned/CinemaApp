System.config({
    map: {
        'app':                                'app',
        'rxjs':                               'node_modules/rxjs',
        '@angular/router':                    'node_modules/@angular/router/bundles/router.umd.js',
        '@angular/core':                      'node_modules/@angular/core/bundles/core.umd.js',
        '@angular/common':                    'node_modules/@angular/common/bundles/common.umd.js',
        '@angular/compiler':                  'node_modules/@angular/compiler/bundles/compiler.umd.js',
        '@angular/platform-browser':          'node_modules/@angular/platform-browser/bundles/platform-browser.umd.js',
        '@angular/platform-browser-dynamic':  'node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js'
      },

      packages: {
          app: {
              main: './main.js',
              defaultExtension: 'js'
          },
          rxjs: {
              defaultExtension: 'js'
          }
      }
});
