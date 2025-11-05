import { createFrames } from 'frames.js';
import { topMovers, trendingTokens, trendingCollections } from '@/lib/data';

const frames = createFrames({ basePath: '/api/frame' });

export async function GET() {
  return frames(async () => {
    return {
      image: (
        <div
          style={{
            width: '100%',
            height: '100%',
            background: 'white',
            color: 'black',
            display: 'flex',
            flexDirection: 'column',
            padding: '48px',
            fontFamily: 'sans-serif',
            fontSize: '32px',
            lineHeight: '1.4'
          }}
        >
          <div>
            <div style={{ fontSize: '40px', fontWeight: 'bold' }}>Top Movers Today</div>
            <div style={{ fontSize: '24px', color: '#666', marginBottom: '16px' }}>
              Largest floor price change in the past day
            </div>
            {topMovers.map((item, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '12px 0',
                  borderBottom: '1px solid #eee',
                  fontSize: '28px'
                }}
              >
                <span>{item.name}</span>
                <span>{item.floor} ETH</span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '48px' }}>
            <div style={{ fontSize: '40px', fontWeight: 'bold' }}>Trending Tokens</div>
            <div style={{ fontSize: '24px', color: '#666', marginBottom: '16px' }}>
              Largest price change in the past day
            </div>
            {trendingTokens.map((item, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '12px 0',
                  borderBottom: '1px solid #eee',
                  fontSize: '28px'
                }}
              >
                <span>{item.name}</span>
                <span>{item.priceChange}</span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '48px' }}>
            <div style={{ fontSize: '40px', fontWeight: 'bold' }}>Trending Collections</div>
            <div style={{ fontSize: '24px', color: '#666', marginBottom: '16px' }}>
              Highest sales in the past hour
            </div>
            {trendingCollections.map((item, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '12px 0',
                  borderBottom: '1px solid #eee',
                  fontSize: '28px'
                }}
              >
                <span>{item.name}</span>
                <span>{item.sales} sales</span>
              </div>
            ))}
          </div>
        </div>
      ),
      buttons: []
    };
  })();
          }
