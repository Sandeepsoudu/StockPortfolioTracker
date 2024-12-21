package com.sandeep.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class StockPriceService {

    private static final String API_KEY = "your_api_key";
    private static final String API_URL = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol={symbol}&interval=5min&apikey="
            + API_KEY;

    public double getStockPrice(String symbol) {
        RestTemplate restTemplate = new RestTemplate();
        String url = API_URL.replace("{symbol}", symbol);
        String response = restTemplate.getForObject(url, String.class);

        // Parse the JSON response and extract the price (you need to implement a JSON
        // parser here)
        // This is a simplified example and should handle parsing properly
        return 100.0; // Replace with the actual extracted value
    }
}
