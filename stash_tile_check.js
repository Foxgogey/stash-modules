// Generic availability tile for Stash
// Argument format: Title|URL|sf.symbol.icon

function finish(title, content, icon, color, url) {
  $done({
    title: title,
    content: content,
    icon: icon || 'network',
    backgroundColor: color,
    url: url
  });
}

var arg = typeof $argument === 'string' ? $argument : '';
var parts = arg.split('|');
var title = parts[0] || 'Service';
var target = parts[1] || 'https://example.com';
var icon = parts[2] || 'network';

var start = Date.now();

$httpClient.get(target, function(error, response, data) {
  var ms = Date.now() - start;

  if (error) {
    finish(title, 'DOWN / ' + String(error).slice(0, 48), icon, '#8B0000', target);
    return;
  }

  var status = response && response.status ? Number(response.status) : 0;
  if (status >= 200 && status < 400) {
    finish(title, 'OK ' + status + ' / ' + ms + ' ms', icon, '#1F7A3A', target);
  } else if (status >= 400 && status < 500) {
    finish(title, 'REACHABLE ' + status + ' / ' + ms + ' ms', icon, '#B8860B', target);
  } else if (status >= 500) {
    finish(title, 'SERVER ' + status + ' / ' + ms + ' ms', icon, '#B22222', target);
  } else {
    finish(title, 'UNKNOWN / ' + ms + ' ms', icon, '#696969', target);
  }
});
