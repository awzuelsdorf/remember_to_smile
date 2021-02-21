// Copyright (c) 2021 Andrew Zuelsdorf. All rights reserved.

const message = "Hello! It looks like you're visiting www.amazon.com. Would you consider visiting smile.amazon.com instead? For no extra cost to you, a portion of the price you pay for eligible products on smile.amazon.com will be donated to a charitable organization of your choice. Click OK to visit smile.amazon.com. Click Cancel to decline.";

const amazonDomains = ["amazon.co.uk", "amazon.com", "amazon.de"];

for (let i = 0; i < amazonDomains.length; ++i) {
    if (window.location.href == "https://www." + amazonDomains[i]) {
        if (window.confirm(message)) {
            window.location.href = "https://smile." + amazonDomains[i];
        }
    }
}
