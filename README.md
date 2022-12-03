# eBay Randomizer

eBay Randomizer was inspired by noticing that eBay links contain [.co.uk/itm/NUMBER],
and the number is all that is needed to get a valid link to an item on the site.

## THEORY
The itm tag is directly transposable to the "eBay Item Number" each listing has as part
of its metadata. By making an excel sheet to split and process the 12 digit numbers
that compose the item number, and plot the results as colourcoded ranges and percentages
I was able to create a average based generator, and judge the viability of a fullly 
unhooked randomizer or seeding random numbers from a known number. 

My theory is that the URLs are totally sequential, from 100000000000 upwards and when
a listing is ended, over a certain age, or for some other reason removed, that URL is 
thrown back in the pool to be used again, hence why some new listings are in the 4xx
range, while other new listings are in the 1xx range.

## METHOD
The number of occurances of each digit in each position (coloured)  
![image](https://github.com/ADBeta/eBay-Randomizer/blob/main/Spread-Numeral.jpg?raw=true)

The percentage each of these digits have in their respective positions.  
![image](https://github.com/ADBeta/eBay-Randomizer/blob/main/Spread-Percentage.jpg?raw=true)

As of writing this I have just over 100 Samples, which shows some strange patterns -
however this is only a tiny percent of the total valid URLs out there.
I would need a sample size of 100 Million just to get 1% of the total span from 100000000000 to
200000000000, so getting an accurate average is a statistical nightmare.

Another factor to consider, is that a vast majority of this sample wille be either UK
or Chinese listings, as I have limited access to 'foreign' eBay, or friends who are
able to spend the time to gather data.
As such the .ods document where my data is stored is also availible on my github. 
so you can gather your own data to further the accuracy of the project.

## CONCLUSION
Completely Random generation is pretty ineffective, yielding below 10% success.

Generating by seed seems pretty effective, having a wide range of success but generally
falling within the 50% success range, having selected a good seed and range variable.

The Average Random generation hasn't had enough testing to get a good estimate for the
success rate, but it seems much more likely to get hits more often than the other methods.
