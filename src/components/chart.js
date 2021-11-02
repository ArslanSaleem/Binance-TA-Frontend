

import React, { useEffect, useRef }  from 'react';
import { createChart, CrosshairMode } from 'lightweight-charts';


export function Chart() {
    const chartContainerRef = useRef();
    const chart = useRef();
    const symbol = 'BTCBUSD';
    var binanceSocket = new WebSocket("wss://stream.binance.com:9443/ws/btcbusd@kline_5m");

  useEffect(() => {
    chart.current = createChart(chartContainerRef.current, {
      height: 500,
      layout: {
        backgroundColor: '#253248',
        textColor: 'rgba(255, 255, 255, 0.9)',
      },
      grid: {
        vertLines: {
          color: '#334158',
        },
        horzLines: {
          color: '#334158',
        },
      },
      crosshair: {
        mode: CrosshairMode.Normal,
      },
      priceScale: {
        borderColor: '#485c7b',
      },
      timeScale: {
        borderColor: '#485c7b',
      },
    });

    const candleSeries = chart.current.addCandlestickSeries({
      upColor: '#4bffb5',
      downColor: '#ff4976',
      borderDownColor: '#ff4976',
      borderUpColor: '#4bffb5',
      wickDownColor: '#838ca1',
      wickUpColor: '#838ca1',
    });

    

    binanceSocket.onmessage = function (event) {	
        var message = JSON.parse(event.data);

        var candlestick = message.k;

        candleSeries.update({
            time: candlestick.t / 1000,
            open: candlestick.o,
            high: candlestick.h,
            low: candlestick.l,
            close: candlestick.c
        })
    }

    fetch('https://api1.binance.com/api/v3/time').then((r) => r.json()).then((response) => {
        
        fetch('https://api1.binance.com/api/v3/klines?'+ new URLSearchParams({
            symbol: 'BTCBUSD',
            interval: '5m',
            endTime:   response['serverTime'],
        })).then((r) => r.json()).then((response) => {
            var data = new Array();
            response.forEach(function (item, index) {
                data.push({
                    "time": item[0] / 1000,
                    "open": item[1],
                    "high": item[2],
                    "low": item[3],
                    "close": item[4]
                })
              });
              candleSeries.setData(data);
        });
    });

    const volumeSeries = chart.current.addHistogramSeries({
      color: '#182233',
      lineWidth: 2,
      priceFormat: {
        type: 'volume',
      },
      overlay: true,
      scaleMargins: {
        top: 0.8,
        bottom: 0,
      },
    });

    volumeSeries.setData([]);
  }, []);


  return (
    
     <div style={{height:'500px', width:'70%', marginLeft: '10px', marginRight:'10px', marginTop:'10px'}} >
      <div ref={chartContainerRef} className="chart-container" />
    </div>
  );
}