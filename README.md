## Package `@cable_ready/audio_operations`

A collection of audio operations meant to be used with [`cable_ready`](https://github.com/hopsoft/cable_ready).


### Installation

Install `@cable_ready/audio_operations` in your application:

```bash
yarn add @cable_ready/audio_operations

# or

npm install --save @cable_ready/audio_operations
```

### Usage

Add the audio operations to CableReady:

```javascript
// app/javascript/packs/application.js

import CableReady from 'cable_ready'
import AudioOperations from '@cable_ready/audio_operations'

CableReady.addOperations(AudioOperations)
```

And configure CableReady on the Ruby-side to include the new operation:

```ruby
# config/initializers/cable_ready.rb

CableReady.configure do |config|
  config.add_operation_name :play_sound
end
```
