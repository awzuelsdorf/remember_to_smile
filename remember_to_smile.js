// Copyright (c) 2021 Andrew Zuelsdorf. All rights reserved.

const amazonDomains = ["amazon.co.uk", "amazon.com", "amazon.de"];

for (let i = 0; i < amazonDomains.length; ++i) {
    if (window.location.href == "https://www." + amazonDomains[i]) {
        const message = "Hello! It looks like you're visiting " + amazonDomains[i] + ". Would you consider visiting smile." + amazonDomains[i] + " instead? For no extra cost to you, a portion of the price you pay for eligible products on smile." + amazonDomains[i] + " will be donated to a charitable organization of your choice. Click OK to visit smile." + amazonDomains[i] + ". Click Cancel to decline.";

        if (window.confirm(message)) {
            window.location.href = "https://smile." + amazonDomains[i];
        }
    }
}
