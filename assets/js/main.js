const now = new Date();
let siteName="دليل فعاليات المدينة"
let phone="+963-932915017"
let email="abdul_hadi_378675@svuonline.org"
let address="سورية, دمشق"
let year=new Date().getFullYear();
let rights="جميع الحقوق محفوظة &copy; " + year + ' ' + siteName

$("#headTitle").text(siteName);

function header()
{
	return '<header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">\
				<a href="/" class="d-flex align-items-center mb-3 mb-md-0 ms-md-auto link-body-emphasis text-decoration-none"> \
					<svg class="bi me-2" width="40" height="32" aria-hidden="true"><use xlink:href="#bootstrap"></use></svg> \
					<span class="fs-4">'+siteName+'</span> \
				</a> \
				<ul class="nav nav-pills"> \
					<li class="nav-item"><a href="./index.html" class="nav-link active">الرئيسية</a></li> \
					<li class="nav-item"><a href="./events.html" class="nav-link">الفعاليات</a></li> \
					<li class="nav-item"><a href="./about.html" class="nav-link">عن الدليل</a></li> \
					<li class="nav-item"><a href="./contact.html" class="nav-link">اتصل بنا</a></li> \
				</ul> \
			</header>'
}

function footer()
{
	return '<footer class="border-top mt-5 py-4">\
				<div class="container">\
					<div class="row g-4 align-items-start">\
						<div class="col-12 col-md-4">\
							<h5 class="mb-3">اتصل بنا</h5>\
							<ul class="list-unstyled mb-0">\
								<li class="mb-2">\
									<strong>ايميل:</strong>\
									<a href="mailto:'+email+'" class="text-decoration-none">'+email+'</a>\
								</li>\
								<li class="mb-2">\
									<strong>هاتف:</strong>\
									<a href="tel:'+phone+'" class="text-decoration-none">'+phone+'</a>\
								</li>\
								<li>\
									<strong>عنوان:</strong>\
									<span>'+address+'</span>\
								</li>\
							</ul>\
						</div>\
					<div class="col-12 col-md-4">\
						<h5 class="mb-3">تواصل اجتماعي</h5>\
						<ul class="list-unstyled mb-0">\
							<li class="mb-2"><a class="text-decoration-none" href="#" target="_blank" rel="noopener">Facebook</a></li>\
							<li class="mb-2"><a class="text-decoration-none" href="#" target="_blank" rel="noopener">Instagram</a></li>\
							<li class="mb-2"><a class="text-decoration-none" href="#" target="_blank" rel="noopener">X (Twitter)</a></li>\
							<li><a class="text-decoration-none" href="#" target="_blank" rel="noopener">LinkedIn</a></li>\
						</ul>\
					</div>\
					<div class="col-12 col-md-4">\
						<h5 class="mb-3">قانونيّات</h5>\
						<ul class="list-unstyled mb-3">\
							<li class="mb-2"><a class="text-decoration-none" href="#">سياسة الخصوصية</a></li>\
							<li class="mb-2"><a class="text-decoration-none" href="#">شروط الخدمة</a></li>\
						</ul>\
					</div>\
				</div>\
				<div class="row">\
					<div class="col justify-content-center">\
						<small class="text-muted d-block">\
							'+rights+'\
						</small>\
					</div>\
				</div>\
			</div>\
			</footer>'
}

function backToTop()
{
	return '<div class="row">\
				<div class="col">\
					<button type="button"\
						class="btn btn-primary btn-lg shadow"\
						id="btn-back-to-top"\
						aria-label="Back to top"\
						style="position:fixed; bottom:20px; right:20px; display:none; z-index:1080;">\
						<span aria-hidden="true">↑</span>\
					</button>\
				</div>\
			</div>'
}

function checkStatus(start, end)
{
	dateStart = new Date(start + "T23:59:59");
	dateEnd = new Date(end + "T23:59:59");

	if(dateStart > now)
		return '<span class="badge bg-success">قادمة</span>'
	if(now >= dateStart && now <= dateEnd)
		return '<span class="badge bg-primary">الان</span>'
	if(now > dateEnd)
		return '<span class="badge bg-dark">سابقة</span>'
}


function createEventList(eventsData)
{
	const eventsList = document.getElementById("eventsList");
	eventsList.innerHTML = ""
	if(typeof eventsData != "undefined" && eventsData.length > 0)
	{
		for ( i=0; i < eventsData.length;i++)
		{
			let card='<div class="col">\
					<div class="card h-100">\
						<img src="'+eventsData[i].image+'" class="card-img-top" onerror="this.onerror=null; this.src=\'data:image/svg+xml;utf8,<?xml version=&quot;1.0&quot;?><svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;600&quot; height=&quot;400&quot;><rect width=&quot;100%&quot; height=&quot;100%&quot; fill=&quot;%23e9ecef&quot;/><text x=&quot;50%&quot; y=&quot;50%&quot; dominant-baseline=&quot;middle&quot; text-anchor=&quot;middle&quot; font-family=&quot;Arial&quot; font-size=&quot;24&quot; fill=&quot;%236c757d&quot;>لا يوجد صورة</text></svg>\';" alt="لا يوجد صورة">\
						<div class="card-body">\
							<h5 class="card-title">'+eventsData[i].title+'</h5>\
							'+checkStatus(eventsData[i].date.start,eventsData[i].date.end)+'\
							<span class="badge bg-primary badge-category">'+eventsData[i].category+'</span>\
							<p class="card-text">'+eventsData[i].shortDescription+'</p>\
							<p class="card-text">📅 '+eventsData[i].date.end+' → '+eventsData[i].date.start+'</p>\
							<p class="card-text">📍 '+eventsData[i].location.country+' ,'+eventsData[i].location.city+' ,'+eventsData[i].location.venue+'</p>\
							<a class="card-text btn btn-primary w-100" href="./event.html?id='+eventsData[i].id+'">عرض التفاصيل</a>\
						</div>\
					</div>\
				</div>'
			eventsList.innerHTML += card
		}
	}
	else {
		eventsList.innerHTML += '<h3><span>لا يوجد فعاليات</span></h3>'	
	}
}

function createEventListByCategory(category, data)
{
	events = []
	if(category != "")
	{
		for ( i=0; i < data.length;i++)
		{
			if(data[i].category == category){
				events.push(data[i])
			}
		}
	} else {
		events = data
	}
	return events
}

function createEventListByDate(date, data)
{
	events = []
	newDate = new Date(date + "T23:59:59");
	
	if(date != "")
	{
		for ( i=0; i < data.length;i++)
		{
			startDate = new Date(data[i].date.start + "T23:59:59");
			endDate = new Date(data[i].date.end + "T23:59:59");
			
			if(startDate.getTime() == newDate.getTime() || endDate.getTime() == newDate.getTime()){
				console.log(newDate + " " + startDate + " " + endDate)
				events.push(data[i])
			}
		}
	} else {
		events = data
	}
	return events
}

function createEventListByLocation(location, data)
{
	events = []
	console.log(location)
	if(location != "")
	{
		for ( i=0; i < data.length;i++)
		{
			loc = data[i].location.venue + ' ' + data[i].location.city + ' ' + data[i].location.country
			console.log(loc)
			if(loc.toLocaleLowerCase().includes(location.toLocaleLowerCase())){
				events.push(data[i])
			}
		}
	} else {
		events = data
	}
	return events
}

function latestEvents()
{
	tmp = data 
	tmp.events.sort((a, b) => new Date(b.date.start) - new Date(a.date.start));
	return  tmp.events.slice(0, 3);

}

function getThisWeekEvents() {
  const now = new Date();

  const weekStart = new Date(now);
  const day = (now.getDay() + 6) % 7;
  weekStart.setDate(now.getDate() - day);
  weekStart.setHours(0, 0, 0, 0);

  const weekEnd = new Date(weekStart);
  weekEnd.setDate(weekStart.getDate() + 6);
  weekEnd.setHours(23, 59, 59, 999);

  return data.events.filter(e => {
    const start = new Date(e.date.start + "T00:00:00");
    const end   = new Date(e.date.end   + "T23:59:59");
    return start <= weekEnd && end >= weekStart; // overlaps week
  });
}


