
#!/usr/bin/env python3
import json
from craigslist import CraigslistHousing as CLH

rooms = CLH(site = 'newyork', area='lgi', category = 'aap', filters = {'has_image': 1, 'is_furnished': 1})


results = [];

for i in rooms.get_results(sort_by = 'newest', geotagged = True, include_details=True,limit=1000):
    # results.append({'ID':i['id'],'latlon':i['geotag'],'neighborhood':i['where'],'images':i['images']})
    # print('ID:      {0}'.format(i['id']))
    results.append(i)
# print(results);
with open("results.txt","w") as filehandle:
    json.dump(results,filehandle)
# f.write(results)
# f.close()

# print(rooms.get_results(sort_by = 'newest', geotagged = True, include_details=True,limit=1))
