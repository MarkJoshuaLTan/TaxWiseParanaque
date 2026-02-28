import localforage from 'localforage';

const reportStore = localforage.createInstance({
  name: 'TaxWiseDB',
  storeName: 'reports'
});

export async function saveReport(report: any) {
  const reports: any[] = await getReports();
  reports.push({
    ...report,
    id: new Date().toISOString() + Math.random(),
    createdAt: new Date().toISOString(),
    read: false
  });
  await reportStore.setItem('list', reports);
  return reports;
}

export async function getReports(): Promise<any[]> {
  const data = await reportStore.getItem('list');
  return Array.isArray(data) ? data : [];
}