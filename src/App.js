import { get, has, random } from 'node-emoji';
import { useState } from 'react';

export default function App() {
  // { name: 'house', emoji: '🏠' }
  const initialEmoji = random();
  // 1. Create a state for the input
  const [emoji, setEmoji] = useState(initialEmoji.emoji);
  const [emojiInput, setEmojiInput] = useState(initialEmoji.name);

  const hasEmoji = has(emojiInput);

  return (
    <div
      style={{
        fontFamily: 'sans-serif',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1>Random Emoji Generator</h1>
      <div
        style={{
          height: '180px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {hasEmoji && (
          <>
            <div style={{ fontSize: '100px' }}>{emoji}</div>
            <div
              style={{
                backgroundColor: '#f0f0f0',
                padding: '5px 10px',
                marginBottom: '16px',
                borderRadius: '16px',
              }}
            >
              {emojiInput}
            </div>
          </>
        )}
      </div>
      <div>
        <input
          // 2. Set the value to the input
          value={emojiInput}
          onChange={(event) => {
            // 3. Set Emoji name to input value
            setEmojiInput(event.currentTarget.value);
            // get Emoji from the input value
            const foundEmoji = get(event.currentTarget.value);
            // set Emoji icon to found emoji
            setEmoji(foundEmoji);
          }}
        />
        <button
          onClick={() => {
            const newEmoji = random();
            setEmoji(newEmoji.emoji);
            setEmojiInput(newEmoji.name);
          }}
        >
          Generate Random
        </button>
      </div>
      {!hasEmoji && (
        <div
          style={{
            backgroundColor: '#f7b7b7',
            padding: '5px 10px',
            marginBottom: '16px',
            borderRadius: '16px',
          }}
        >
          This emoji doesn't exist
        </div>
      )}
    </div>
  );
}
